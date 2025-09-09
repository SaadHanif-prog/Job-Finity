import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PlusTiltedSquareIcon from "@/assets/icons/plus-tilted-square.svg?react";
import BackspaceIcon from "@/assets/icons/backspace.svg?react";

const formSchema = z.object({
 customerName: z
  .string()
  .min(1, "Customer name is required")
  .min(2, "Customer name must be at least 2 characters"),
 contactInfo: z.string().min(1, "Contact info is required").email("Please enter a valid email address"),
 issueDescription: z
  .string()
  .min(1, "Issue description is required")
  .min(10, "Issue description must be at least 10 characters"),
 productService: z.string().optional(),
 status: z.string().min(1, "Status is required"),
 agentNotes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

function AgentTickets() {
 const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   customerName: "",
   contactInfo: "",
   issueDescription: "",
   productService: "",
   status: "Open",
   agentNotes: "",
  },
 });

 const onSubmit = (data: FormData) => {
  console.log("Ticket created:", data);
 };

 const handleClearAll = () => {
  form.reset();
 };

 return (
  <>
   <section className="mb-24 mt-4 flex flex-col rounded-md border border-muted-light bg-white p-9">
    <header className="mb-10">
     <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Create New Ticket for Outsourcing</h2>
     <p className="text-[#A5ABB0]">Fill in the details below to create a ticket.</p>
    </header>

    <main>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
       <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Customer Name */}
        <FormField
         control={form.control}
         name="customerName"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal text-gray-900">Customer Name</FormLabel>
           <FormControl>
            <Input placeholder="Carl Randle" className="h-12 bg-[#F8F8F8]" {...field} />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />

        {/* Contact Info */}
        <FormField
         control={form.control}
         name="contactInfo"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal text-gray-900">Contact Info (Email/Phone)</FormLabel>
           <FormControl>
            <Input placeholder="admin@jobfinitygroup.com" className="h-12 bg-[#F8F8F8]" {...field} />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>

       {/* Issue Description - Full Width */}
       <div className="mb-6">
        <FormField
         control={form.control}
         name="issueDescription"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal text-gray-900">Issue Description</FormLabel>
           <FormControl>
            <Textarea placeholder="Describe the issue here..." className="min-h-32 bg-[#F8F8F8]" {...field} />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>

       <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Product/Service */}
        <FormField
         control={form.control}
         name="productService"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal text-gray-900">Product/Service (Optional)</FormLabel>
           <FormControl>
            <Input placeholder="Carl Randle" className="h-12 bg-[#F8F8F8]" {...field} />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />

        {/* Status */}
        <FormField
         control={form.control}
         name="status"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal text-gray-900">Status</FormLabel>
           <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
             <SelectTrigger className="h-12 bg-[#F8F8F8]">
              <SelectValue placeholder="Select status" />
             </SelectTrigger>
            </FormControl>
            <SelectContent>
             <SelectItem value="Open">Open</SelectItem>
             <SelectItem value="In Progress">In Progress</SelectItem>
             <SelectItem value="Pending">Pending</SelectItem>
             <SelectItem value="Resolved">Resolved</SelectItem>
             <SelectItem value="Closed">Closed</SelectItem>
            </SelectContent>
           </Select>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>

       {/* Agent Notes - Full Width */}
       <div className="mb-10">
        <FormField
         control={form.control}
         name="agentNotes"
         render={({ field }) => (
          <FormItem>
           <FormLabel className="mb-2 block font-normal text-gray-900">Agent Notes (Optional)</FormLabel>
           <FormControl>
            <Textarea
             placeholder="Internal Notes about the ticket..."
             className="min-h-32 resize-none bg-[#F8F8F8]"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>

       {/* Action Buttons */}
       <div className="flex gap-4">
        <Button
         type="submit"
         className="h-auto bg-slate-900 px-4 py-3 text-base text-slate-50 hover:bg-slate-900/90"
        >
         <PlusTiltedSquareIcon className="!size-6" />
         Create Ticket
        </Button>

        <Button
         type="button"
         variant="outline"
         onClick={handleClearAll}
         className="h-auto px-4 py-3 text-base hover:border-red-500 hover:bg-red-500"
        >
         <BackspaceIcon className="!size-6" />
         Clear All
        </Button>
       </div>
      </form>
     </Form>
    </main>
   </section>
  </>
 );
}

export default AgentTickets;
