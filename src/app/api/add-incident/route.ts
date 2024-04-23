/* eslint-disable import/prefer-default-export */
import { NextResponse } from "next/server";

import { db } from "@/db";
import { incidents } from "@/db/schema/incidents";
import { individual } from "@/db/schema/individual";
import { IncidentForm } from "@/components/UserForm";
import { organisation } from "@/db/schema/organisation";


export async function POST(request: Request){
    const incident:IncidentForm = await request.json()
    console.log(incident)
    // defaults to adding user 1 (Jack) as the user id. Change to "current user" 

    const insertIndividual = await db.insert(individual).values({firstName: incident.firstName, lastName: incident.lastName, email:incident.email, phone: incident.phone, country: incident.country}).returning({ insertedId: individual.id })


  
    // if all org attributes exist, inset into individual 
    if(incident.orgName){

     const insertOrg = await db.insert(organisation).values({orgName: incident.orgName, individuals: insertIndividual[0].insertedId, createdBy: 1}).returning({ insertedId: organisation.id})

      await db.insert(incidents).values([{description: incident.description, userId: 1, individualsId: insertIndividual[0].insertedId, organisationId: insertOrg[0].insertedId  }])

    }
    else{
      await db.insert(incidents).values([{description: incident.description, userId: 1, individualsId: insertIndividual[0].insertedId }])
    }

    return NextResponse.json("success");

}