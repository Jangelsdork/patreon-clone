import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";



const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request){
    const user = await request.json()
    
    await client.execute(`INSERT INTO USERS (name) VALUES ("${user.username}")`);

    return NextResponse.json("success");

}