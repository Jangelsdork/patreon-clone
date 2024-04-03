"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email address" }).max(50),
  phone: z.string().min(2).max(16),
  country: z.string().min(2).max(50),
  createdBy: z.number()

})
type Props = {}

export const IndividualForm = (props: Props) => {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "", 
          phone: "", 
          country: "", 
          createdBy: 1
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }

  return (
    <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>firstName</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}


export default IndividualForm