/* eslint-disable import/prefer-default-export */

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { IoBusiness,  IoPersonCircleSharp} from "react-icons/io5";
import IndividualForm from "./IndividualForm"


import { Textarea } from "./ui/textarea"



const formSchema = z.object({
  description: z.string().min(2).max(1000, { message: "Please keep the report to 1000 characters or less"}),
  userId: z.number()
})
export type IncidentForm = z.infer<typeof formSchema>

export function UserForm() {

  const [individualClicked, setIndividualClicked] = useState<boolean>(false)
  const [organisationClicked, setOrganisationClicked] = useState<boolean>(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      userId: 1
    },
  })

 

  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
    try{
      const response = await fetch("/api/add-incident",{
        method:"POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        },

      },
      
      // lets do some better error handling / return if successful
      )
      return response.json()
    }
    catch(error) {
      console.error(error)
    throw error 
    }
  }

  return (

    <div>        <h1>Submit a new incident report</h1>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Incident report</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please add a description of the incident..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>Please link the incident to an individual, an organisation, or both: </div>
        <div className="grid grid-cols-[30fr_70fr] items-center content-center text-center gap-4 border-2 border-slate p-6">
          <IoPersonCircleSharp size={100} />
          {individualClicked?<IndividualForm setIndividualClicked={setIndividualClicked} />:<Button variant="outline" onClick={() => setIndividualClicked(!individualClicked)}>Link to an individual</Button>}
        </div>
        
        
        <div className="grid grid-cols-[30fr_70fr] items-center content-center text-center gap-4 border-2 border-slate p-6" >
          <IoBusiness size={100} />
          <Button variant="outline" onClick={() => setOrganisationClicked(!organisationClicked)}>Link to an organisation</Button>
          <div>{organisationClicked?<div>clicked</div>:<div>not clicked</div>}</div>

        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  );
}