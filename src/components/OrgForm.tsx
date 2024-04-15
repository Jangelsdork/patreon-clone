/* eslint-disable arrow-body-style */

"use client"

import { MdKeyboardArrowUp } from "react-icons/md";

import { UseFormReturn } from "react-hook-form"

import React from "react"


import { Button } from "@/components/ui/button"
import {
  // Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
// const formSchema = z.object({
//   firstName: z.string().min(2).max(50),
//   lastName: z.string().min(2).max(50),
//   email: z.string().email({ message: "Invalid email address" }).max(50),
//   phone: z.string().min(2).max(16),
//   country: z.string().min(2).max(50),
//   createdBy: z.number()

// })
type Props = {
    setOrganisationClicked:React.Dispatch<React.SetStateAction<boolean>>
    form: UseFormReturn<{
      description: string;
      userId: number;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      country: string;
      createdBy: number | "";
      orgName: string;
      orgEmail: string;
      orgPhone: string;
      orgCountry: string;
      orgCity: string;
      orgCreatedBy: number | "";
  }, any, undefined>
}

export const OrgForm = ({setOrganisationClicked, form}: Props) => {
    

  return (
    <div className=" flex flex-col ">
    <FormField
          control={form.control}
          name="orgName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation Name</FormLabel>
              <FormControl>
                <Input placeholder="Big Sounds PTY LTD" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="orgEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation Email</FormLabel>
              <FormControl>
                <Input placeholder="big@sounds.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="orgPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+61 234 567..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="orgCountry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Australia" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="orgCity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Melbourne" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4" variant="link" onClick={() => setOrganisationClicked(false)}><MdKeyboardArrowUp /></Button>
    </div>

  )
}


export default OrgForm