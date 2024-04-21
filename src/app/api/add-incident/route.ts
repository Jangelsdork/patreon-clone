/* eslint-disable import/prefer-default-export */
import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";

import { db } from "@/db";
import { incidents } from "@/db/schema/incidents";
import { individual } from "@/db/schema/individual";




const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export async function POST(request: Request){
    const incident = await request.json()
    console.log(incident)
    // defaults to adding user 1 (Jack) as the user id. Change to "current user" 

    await client.execute(`INSERT INTO INCIDENTS (description, userId ) VALUES ("${incident.description}", 1)`);

    // await db.insert(incidents).values([{description: incident.description}, {userId: 1}]).returning({ insertedId: incidents.id })
    
    await client.execute(`INSERT INTO INDIVIDUAL (firstName, lastName, email, phone, country, createdBy ) VALUES ("${incident.firstName}", "${incident.lastName}", "${incident.email}", "${incident.phone}", "${incident.country}", 1)`);
    
    // await db.insert(individual).values([{firstName: incident.firstName}, {lastName:incident.lastName}, {email: incident.email}, {phone: incident.phone}, {country: incident.country}, {createdBy: incident.createdBy}])
    // if all org attributes exist, inset into individual 
    if(incident.orgName){
      await client.execute(`INSERT INTO ORGANISATION (orgName, individuals, createdBy ) VALUES ("${incident.orgName}", 1, 1)`);
    }

    return NextResponse.json("success");

}