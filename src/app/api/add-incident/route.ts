import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";



const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request){
    const incident = await request.json()
    console.log(incident.description)
    
    await client.execute(`INSERT INTO INCIDENTS (description) VALUES ("${incident.description}")`);

    return NextResponse.json("success");

}