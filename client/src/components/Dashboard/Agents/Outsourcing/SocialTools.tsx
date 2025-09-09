import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import BookIcon from "@/assets/icons/book.svg?react";
import SendMessageIcon from "@/assets/icons/send-message.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import GmailIcon from "@/assets/icons/gmail.svg?react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contentFormSchema = z.object({
 outreachType: z.string().min(1, "Outreach type is required"),
 socialMediaPlatform: z.string().min(1, "Social media platform is required"),
 objective: z.string().min(1, "Objective is required"),
 targetPersonaDescription: z.string().min(1, "Target persona description is required"),
});

const outreachFormSchema = z.object({
 sendVia: z.string().min(1, "Send via is required"),
 recipient: z.string().min(1, "Recipient is required"),
 postContent: z
  .string()
  .min(1, "Post content is required")
  .min(10, "Post content must be at least 10 characters"),
});

type ContentFormData = z.infer<typeof contentFormSchema>;
type OutreachFormData = z.infer<typeof outreachFormSchema>;

function AgentSocialTools() {
 const contentForm = useForm<ContentFormData>({
  resolver: zodResolver(contentFormSchema),
  defaultValues: {
   outreachType: "",
   socialMediaPlatform: "",
   objective: "",
   targetPersonaDescription: "",
  },
 });

 const outreachForm = useForm<OutreachFormData>({
  resolver: zodResolver(outreachFormSchema),
  defaultValues: {
   sendVia: "",
   recipient: "",
   postContent: "",
  },
 });

 const onContentSubmit = (data: ContentFormData) => {
  console.log("Content generated:", data);
 };

 const onOutreachSubmit = (data: OutreachFormData) => {
  console.log("Message sent:", data);
 };

 return (
  <>
   <section className="mb-24 mt-4 flex flex-col">
    <div className="flex flex-col rounded-md border border-muted-light bg-white p-9">
     <header className="mb-10">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Connect Social Accounts (Simulated)</h2>
      <p className="text-[#A5ABB0]">Manage your connections for posting.</p>
     </header>

     <main className="flex gap-5">
      <Card className="grow bg-[#F8F8F8] px-6 py-5">
       <CardContent className="mb-10 flex gap-2 font-normal tracking-[-0.04em] h4">
        <FacebookIcon />
        Facebook
       </CardContent>
       <CardFooter>
        <Button variant="outline" className="mt-auto w-full bg-[#F8F8F8] font-normal">
         Connect
        </Button>
       </CardFooter>
      </Card>

      <Card className="grow bg-[#F8F8F8] px-6 py-5">
       <CardContent className="mb-10 flex gap-2 font-normal tracking-[-0.04em] h4">
        <XIcon />
        Twitter/X
       </CardContent>
       <CardFooter>
        <Button variant="outline" className="mt-auto w-full bg-[#F8F8F8] font-normal">
         Connect
        </Button>
       </CardFooter>
      </Card>

      <Card className="grow bg-[#F8F8F8] px-6 py-5">
       <CardContent className="mb-10 flex gap-2 font-normal tracking-[-0.04em] h4">
        <GmailIcon />
        Email Account
       </CardContent>
       <CardFooter>
        <Button variant="outline" className="mt-auto w-full bg-[#F8F8F8] font-normal">
         Connect
        </Button>
       </CardFooter>
      </Card>
     </main>
    </div>

    <Separator className="my-6 h-[1px] bg-muted-light" />

    <div className="flex flex-col rounded-md border border-muted-light bg-white p-9">
     <header className="mb-10">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Generate Outreach Content</h2>
      <p className="text-[#A5ABB0]">Fill in the details below to create content.</p>
     </header>

     <main>
      <Form {...contentForm}>
       <form onSubmit={contentForm.handleSubmit(onContentSubmit)}>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
         {/* Outreach Type */}
         <FormField
          control={contentForm.control}
          name="outreachType"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Outreach Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
             <FormControl>
              <SelectTrigger className="h-12 bg-[#F8F8F8]">
               <SelectValue placeholder="Social Media Post/DM" />
              </SelectTrigger>
             </FormControl>
             <SelectContent>
              <SelectItem value="social-media-post">Social Media Post/DM</SelectItem>
              <SelectItem value="email-campaign">Email Campaign</SelectItem>
              <SelectItem value="direct-message">Direct Message</SelectItem>
              <SelectItem value="cold-outreach">Cold Outreach</SelectItem>
             </SelectContent>
            </Select>
            <FormMessage />
           </FormItem>
          )}
         />

         {/* Social Media Platform */}
         <FormField
          control={contentForm.control}
          name="socialMediaPlatform"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Social Media Platform</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
             <FormControl>
              <SelectTrigger className="h-12 bg-[#F8F8F8]">
               <SelectValue placeholder="LinkedIn" />
              </SelectTrigger>
             </FormControl>
             <SelectContent>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="twitter">Twitter/X</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="email">Email</SelectItem>
             </SelectContent>
            </Select>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <div className="mb-6">
         <FormField
          control={contentForm.control}
          name="objective"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Objective</FormLabel>
            <FormControl>
             <Input placeholder="Introduce new product..." className="h-12 bg-[#F8F8F8]" {...field} />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <div className="mb-10">
         <FormField
          control={contentForm.control}
          name="targetPersonaDescription"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Target Persona Description</FormLabel>
            <FormControl>
             <Input placeholder="CTO at a mid tech company" className="h-12 bg-[#F8F8F8]" {...field} />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <Button
         type="submit"
         className="h-auto bg-slate-900 px-4 py-3 text-base text-slate-50 hover:bg-slate-900/90"
        >
         <BookIcon className="!size-6" />
         Generate Content
        </Button>
       </form>
      </Form>
     </main>
    </div>

    <Separator className="my-6 h-[1px] bg-muted-light" />

    <div className="flex flex-col rounded-md border border-muted-light bg-white p-9">
     <header className="mb-10">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Simulate Direct Outreach</h2>
      <p className="text-[#A5ABB0]">Send your drafted message via selected platforms.</p>
     </header>

     <main>
      <Form {...outreachForm}>
       <form onSubmit={outreachForm.handleSubmit(onOutreachSubmit)}>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
         {/* Send Via */}
         <FormField
          control={outreachForm.control}
          name="sendVia"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Send Via</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
             <FormControl>
              <SelectTrigger className="h-12 bg-[#F8F8F8]">
               <SelectValue placeholder="LinkedIn" />
              </SelectTrigger>
             </FormControl>
             <SelectContent>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="twitter">Twitter/X</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="email">Email</SelectItem>
             </SelectContent>
            </Select>
            <FormMessage />
           </FormItem>
          )}
         />

         {/* Recipient */}
         <FormField
          control={outreachForm.control}
          name="recipient"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">
             Recipient (Profile URL or Email Address)
            </FormLabel>
            <FormControl>
             <Input placeholder="www.linkedin.com/jobfinitygroup" className="h-12 bg-[#F8F8F8]" {...field} />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <div className="mb-10">
         <FormField
          control={outreachForm.control}
          name="postContent"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Post Content</FormLabel>
            <FormControl>
             <Textarea
              placeholder="Write your social media post here..."
              className="min-h-32 bg-[#F8F8F8]"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <Button
         type="submit"
         className="h-auto bg-slate-900 px-4 py-3 text-base text-slate-50 hover:bg-slate-900/90"
        >
         <SendMessageIcon className="!size-6" />
         Send Message
        </Button>
       </form>
      </Form>
     </main>
    </div>
   </section>
  </>
 );
}

export default AgentSocialTools;
