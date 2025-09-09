import DocIcon from "@/assets/icons/doc.svg?react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import AiGlitter from "@/assets/icons/ai-glitter.svg?react";
import GreenCheckIcon from "@/assets/icons/green-check.svg?react";
import moment from "moment";
import LEADS_DATA from "@/constants/leads-data";
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AGENTS_DATA from "@/constants/agents-data";
import { Copy, CopyCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const copyToClipboard = async (text: string, setCopied: (value: string) => void, leadId: string) => {
 try {
  await navigator.clipboard.writeText(text);
  setCopied(leadId);
  setTimeout(() => setCopied(""), 3000);
 } catch (err) {
  console.error("Failed to copy: ", err);
 }
};

function Leads() {
 const [selectedAgent, setSelectedAgent] = useState<string>("all");
 const [emailCopied, setEmailCopied] = useState("");
 const [phoneCopied, setPhoneCopied] = useState("");

 const filteredLeads = useMemo(() => {
  if (selectedAgent === "all") {
   return LEADS_DATA;
  }
  return LEADS_DATA.filter(lead => lead.agent === parseInt(selectedAgent));
 }, [selectedAgent]);

 const selectedAgentName = useMemo(() => {
  if (selectedAgent === "all") return "All Agents";
  const agent = AGENTS_DATA.find(agent => agent.id === parseInt(selectedAgent));
  return agent ? agent.title : "Unknown Agent";
 }, [selectedAgent]);

 return (
  <>
   <section className="mb-20">
    <header className="mb-10 flex flex-col items-center justify-start leading-none">
     <DocIcon className="mb-7" />
     <h1 className="mb-5 h2">Generated Leads</h1>
     <p className="mb-6 text-[#A5ABB0]">Review past lead generations.</p>
     <div className="w-full max-w-xs">
      <Select value={selectedAgent} onValueChange={setSelectedAgent}>
       <SelectTrigger className="h-12 w-full bg-[#F8F8F8]">
        <SelectValue placeholder="Filter by Agent" />
       </SelectTrigger>
       <SelectContent>
        <SelectItem value="all">All Agents</SelectItem>
        {AGENTS_DATA.map(agent => (
         <SelectItem key={agent.id} value={agent.id.toString()}>
          {agent.title}
         </SelectItem>
        ))}
       </SelectContent>
      </Select>
     </div>
    </header>

    <main className="3xl:grid-cols-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
     {filteredLeads.length > 0 ? (
      filteredLeads.map(lead => {
       return (
        <Card
         key={lead.id}
         className="flex flex-col gap-4 rounded-md border border-muted-light px-4 pb-6 pt-4"
        >
         <CardHeader className="flex items-start gap-2">
          <div className="flex grow flex-col gap-2">
           <div>
            <AiGlitter className="float-left mr-[6px] !size-5" />
            <p className="font-normal">Lead "{lead.company}"</p>
           </div>
           <p className="text-sm text-[#A5ABB0]">{moment(lead.date).format("D MMM YYYY | hh:mm:ss A")}</p>
          </div>
          <GreenCheckIcon className="ml-auto shrink-0" />
         </CardHeader>
         <CardContent>
          <div className="flex items-center justify-between gap-2">
           <p className="flex-1 text-sm text-[#A5ABB0]">
            <span className="font-normal text-primary-foreground">Email: </span>
            {lead.email}
           </p>
           <Button
            variant="ghost"
            onClick={() => copyToClipboard(lead.email, setEmailCopied, lead.id)}
            disabled={emailCopied === lead.id}
            title={emailCopied === lead.id ? "Copied!" : "Copy email"}
            className="h-7 w-7"
           >
            {emailCopied === lead.id ? (
             <CopyCheck className="h-4 w-4" />
            ) : (
             <Copy className="h-4 w-4 text-[#A5ABB0] hover:text-primary-foreground" />
            )}
           </Button>
          </div>
          <div className="flex items-center justify-between gap-2">
           <p className="flex-1 text-sm text-[#A5ABB0]">
            <span className="font-normal text-primary-foreground">Phone: </span>
            {lead.phoneNumber}
           </p>
           <Button
            variant="ghost"
            onClick={() => copyToClipboard(lead.phoneNumber, setPhoneCopied, lead.id)}
            disabled={phoneCopied === lead.id}
            title={phoneCopied === lead.id ? "Copied!" : "Copy phone number"}
            className="h-7 w-7"
           >
            {phoneCopied === lead.id ? (
             <CopyCheck className="h-4 w-4" />
            ) : (
             <Copy className="h-4 w-4 text-[#A5ABB0] hover:text-primary-foreground" />
            )}
           </Button>
          </div>
         </CardContent>
         <CardFooter className="flex flex-wrap items-start gap-1">
          <p className="min-w-fit text-sm text-[#A5ABB0]" style={{ flexBasis: `calc(45% - 4px)` }}>
           <span className="font-normal text-primary-foreground">#ID:</span> {lead.id}
          </p>
         </CardFooter>
        </Card>
       );
      })
     ) : (
      <div className="col-span-full flex flex-col items-center justify-center py-16">
       <h3 className="mb-2 text-lg text-primary-foreground">No leads Found</h3>
       <p className="text-center text-[#A5ABB0]">
        No leads found for <span className="font-medium">{selectedAgentName}</span>.
        <br />
        Try selecting a different agent or check back later.
       </p>
      </div>
     )}
    </main>
   </section>
  </>
 );
}

export default Leads;
