import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";


const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request){
    const incident = await request.json()
    console.log(incident)
    // defaults to adding user 1 (Jack) as the user id. Change to "current user" 

    await client.execute(`INSERT INTO INCIDENTS (description, userId ) VALUES ("${incident.description}", 1)`);
    await client.execute(`INSERT INTO INDIVIDUAL (firstName, lastName, email, phone, country, createdBy ) VALUES ("${incident.firstName}", "${incident.lastName}", "${incident.email}", "${incident.phone}", "${incident.country}", 1)`);

    return NextResponse.json("success");

}