/* eslint-disable import/prefer-default-export */
import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";


const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export async function POST(request: Request){
    const incident = await request.json()
    console.log(incident)
    // defaults to adding user 1 (Jack) as the user id. Change to "current user" 

    await client.execute(`INSERT INTO INCIDENTS (description, userId ) VALUES ("${incident.description}", 1)`);
    // if all individual attributes exist, inset into individual 
    if(incident.firstName && incident.lastName && incident.email && incident.country && incident.phone){
      await client.execute(`INSERT INTO INDIVIDUAL (firstName, lastName, email, phone, country, createdBy ) Individual.ID VALUES ("${incident.firstName}", "${incident.lastName}", "${incident.email}", "${incident.phone}", "${incident.country}", 1)`);
    }
    // if all org attributes exist, inset into individual 
    if(incident.orgName){
      await client.execute(`INSERT INTO ORGANISATION (orgName, individuals, createdBy ) VALUES ("${incident.orgName}", 1, 1)`);
    }

    return NextResponse.json("success");

}