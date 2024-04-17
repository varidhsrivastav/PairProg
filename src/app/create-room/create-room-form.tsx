'use client'
import z from  "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
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
import { createRoomAction } from "./actions";
import { useRouter } from 'next/navigation';
export const formSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().min(3).max(50),
    tags: z.string().min(3).max(50),
    githubRepo: z.string().min(3).max(50),
});
export function CreateRoomForm(){
    const router =useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          description:"",
          tags: "",
          githubRepo: ""
        },
      })
     async function onSubmit(values: z.infer<typeof formSchema>) {
        await createRoomAction(values);
        router.push("/");
      }
      return(
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="dev finder is awsome "/>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input  {...field} placeholder="I'm working on the side project, come join me" />
              </FormControl>
              <FormDescription>
                please describe what you want to coding room
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Repo</FormLabel>
              <FormControl>
                <Input  {...field} placeholder="https://github.com/ " />
              </FormControl>
              <FormDescription>
                please put a link the project you are working on
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input  {...field} placeholder="typescript,nextjs,react..." />
              </FormControl>
              <FormDescription>
                List your  programming languages, frameworks, liberaries so people can find  you easily. Separate by commas
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      )
}