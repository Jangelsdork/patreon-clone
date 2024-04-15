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
    setIndividualClicked:React.Dispatch<React.SetStateAction<boolean>>
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

export const IndividualForm = ({setIndividualClicked, form}: Props) => {
    
    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //       firstName: "",
    //       lastName: "",
    //       email: "", 
    //       phone: "", 
    //       country: "", 
    //       createdBy: 1
    //     },
    //   })

    //   function onSubmit(values: z.infer<typeof formSchema>) {
    //     console.log(values)
    //   }

  return (
    <div className=" flex flex-col ">
    <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name </FormLabel>
              <FormControl>
                <Input placeholder="Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="j_smith@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>phone</FormLabel>
              <FormControl>
                <Input placeholder="+49 123 456..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>country</FormLabel>
              <FormControl>
                <Input placeholder="Germany" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4" variant="link" onClick={() => setIndividualClicked(false)}><MdKeyboardArrowUp />
</Button>
    </div>

  )
}


export default IndividualForm