import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import StylusIcon from "@/assets/icons/stylus.svg?react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
 callType: z.string().min(1, "Call type is required").min(3, "Call type must be at least 3 characters"),
 productService: z
  .string()
  .min(1, "Product/Service is required")
  .min(3, "Product/Service must be at least 3 characters"),
 customerPersona: z
  .string()
  .min(1, "Customer persona is required")
  .min(3, "Customer persona must be at least 3 characters"),
});

type FormData = z.infer<typeof formSchema>;

function AgentScript() {
 const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   callType: "",
   productService: "",
   customerPersona: "",
  },
 });

 const onSubmit = (data: FormData) => {
  console.log("Form submitted:", data);
 };

 return (
  <>
   <section className="mb-24 mt-4 flex flex-col rounded-md border border-muted-light bg-white p-9">
    <header className="mb-10">
     <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Create New Script for Outsourcing</h2>
     <p className="text-[#A5ABB0]">Fill in the details below to create a ticket.</p>
    </header>
    <main>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
       <div className="flex flex-col gap-9">
        <FormField
         control={form.control}
         name="callType"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal">
            Call Type (e.g., Billing Inquiry, Marketing Outreach)
           </FormLabel>
           <FormControl>
            <Input
             placeholder="AI Outsourcing Consultation, Service Partnership Inquiry"
             className="h-14 border border-muted-light bg-white"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
        <FormField
         control={form.control}
         name="productService"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal">
            Product/Service (e.g., Premium Subscription)
           </FormLabel>
           <FormControl>
            <Input
             placeholder="AI Model Development, AI Team Augmentation, End-to-End AI Solutions"
             className="h-14 border border-muted-light bg-white"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
        <FormField
         control={form.control}
         name="customerPersona"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal">
            Customer Persona (e.g., Frustrated, Potential Client)
           </FormLabel>
           <FormControl>
            <Input
             placeholder="Tech Founder scaling product, Enterprise Innovation Manager, Resource-constrained CTO"
             className="h-14 border border-muted-light bg-white"
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
        className="mt-10 h-auto bg-slate-900 px-4 py-3 text-base font-normal text-slate-50 hover:bg-slate-900/90"
       >
        <StylusIcon className="!size-6" />
        Generate Script
       </Button>
      </form>
     </Form>
    </main>
   </section>
  </>
 );
}

export default AgentScript;
