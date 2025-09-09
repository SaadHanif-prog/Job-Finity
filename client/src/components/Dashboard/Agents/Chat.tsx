import { Button } from "@/components/ui/button";
import LEADS_DATA from "@/constants/leads-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import AiGlitter from "@/assets/icons/ai-glitter.svg?react";
// import GreenCheckIcon from "@/assets/icons/green-check.svg?react";
import { Copy, CopyCheck } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";

const copyToClipboard = async (text: string, setCopied: (value: string) => void, leadId: string) => {
 try {
  await navigator.clipboard.writeText(text);
  setCopied(leadId);
  setTimeout(() => setCopied(""), 3000);
 } catch (err) {
  console.error("Failed to copy: ", err);
 }
};

function AgentChat() {
 const [emailCopied, setEmailCopied] = useState("");
 const [phoneCopied, setPhoneCopied] = useState("");
 const [outBoundNumbers, setOutBoundNumbers] = useState<string[]>([]);


const normalizeNumber = (num: string) =>
  num.replace(/\D/g, ""); 


useEffect(() => {
  const outBoundCalls: string[] = JSON.parse(localStorage.getItem("outboundCalls") || "[]");

  if (!outBoundCalls.length) return;

  const matchedNumbers = LEADS_DATA
    .filter(lead => outBoundCalls.includes(normalizeNumber(lead.phoneNumber)))
    .map(lead => normalizeNumber(lead.phoneNumber));

  const uniqueNumbers = Array.from(new Set(matchedNumbers));
  setOutBoundNumbers(uniqueNumbers);
}, []);


 return (
  <section className="mb-24 mt-4 flex min-h-[80dvh] flex-col rounded-md">
   <main className="3xl:grid-cols-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {LEADS_DATA.map(lead => {
     return (
      <Card key={lead.id} className="flex flex-col gap-4 rounded-md border border-muted-light px-4 pb-6 pt-4">
       <CardHeader className="flex items-start gap-2">
        <div className="flex grow flex-col gap-2">
         <div>
          <AiGlitter className="float-left mr-[6px] !size-5" />
          <p className="font-normal">Lead "{lead.company}"</p>
         </div>
         <p className="text-sm text-[#A5ABB0]">{moment(lead.date).format("D MMM YYYY | hh:mm:ss A")}</p>
        </div>
        <div
         className={`flex h-8 w-8 items-center justify-center rounded-full text-sm capitalize ${
          outBoundNumbers.includes(normalizeNumber(lead.phoneNumber)) ? "bg-green-400" : "bg-red-400"
         }`}
        >
         {outBoundNumbers.includes(normalizeNumber(lead.phoneNumber)) ? "C" : "N"}
        </div>

        {/* <GreenCheckIcon className="ml-auto shrink-0" /> */}
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
    })}
   </main>
  </section>
 );
}

export default AgentChat;
