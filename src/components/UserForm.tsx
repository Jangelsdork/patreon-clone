/* eslint-disable import/prefer-default-export */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

import { IndividualForm } from "./IndividualForm";

import { Textarea } from "./ui/textarea";

const formSchema = z
  .object({
    description: z.string().min(2).max(1000, {
      message: "Please keep the report to 1000 characters or less",
    }),
    userId: z.number(),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .max(50),
    phone: z.string().min(2).max(16),
    country: z.string().min(2).max(50),
    createdBy: z.number().or(z.literal("")),
    orgName: z.string().min(2).max(50).or(z.literal("")),
    orgCreatedBy: z.number().or(z.literal("")),
  })
  // throws error if either ind or org is not filled out.

  
export type IncidentForm = z.infer<typeof formSchema>;

export function UserForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      userId: 1,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      createdBy: 1,
      orgName: "",
      orgCreatedBy: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await fetch(
        "/api/add-incident",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }

        // lets do some better error handling / return if successful
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <div>
      {" "}
      <h1>Submit a new incident report</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border-2 border-slate p-6"
        >
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
  
            <IndividualForm
              form={form}
            />
        

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
