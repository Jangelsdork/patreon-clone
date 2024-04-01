import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";



const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request){
    const { firstName, lastName, email, role } = await request.json()
    
    await client.execute(`INSERT INTO APPUSERS (firstName, lastName, email, role) VALUES ("${firstName}", "${lastName}", "${email}", "${role}")`);

    return NextResponse.json("success");

}