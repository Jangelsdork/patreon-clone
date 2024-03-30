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
    
    await client.execute(`INSERT INTO INCIDENTS (description, userId) VALUES ("${incident.description}", "${incident.userId}")`);

    return NextResponse.json("success");

}