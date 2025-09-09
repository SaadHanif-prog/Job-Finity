import DocIcon from "@/assets/icons/doc.svg?react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import ChatIcon from "@/assets/icons/chat.svg?react";
import CallsIcon from "@/assets/icons/calls.svg?react";
import GreenCheckIcon from "@/assets/icons/green-check.svg?react";
import moment from "moment";
import CALL_LOGS_DATA from "@/constants/call-logs-data";
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AGENTS_DATA from "@/constants/agents-data";

function CallLogs() {
 const [selectedAgent, setSelectedAgent] = useState<string>("all");

 const filteredLogs = useMemo(() => {
  if (selectedAgent === "all") {
   return CALL_LOGS_DATA;
  }
  return CALL_LOGS_DATA.filter(log => log.agent === parseInt(selectedAgent));
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
     <h1 className="mb-5 h2">Conversation Logs</h1>
     <p className="mb-6 text-[#A5ABB0]">Review past interactions with customers.</p>
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
     {filteredLogs.length > 0 ? (
      filteredLogs.map(log => {
       return (
        <Card
         key={log.id}
         className="flex flex-col gap-4 rounded-md border border-muted-light px-4 pb-6 pt-4"
        >
         <CardHeader className="flex items-start gap-2">
          <div className="flex grow flex-col gap-2">
           <div>
            {log.sessionType === "chat" ? (
             <ChatIcon className="float-left mr-[6px]" />
            ) : (
             <CallsIcon className="float-left mr-[6px]" />
            )}
            <p className="font-normal">{log.title}</p>
           </div>
           <p className="text-sm text-[#A5ABB0]">{moment(log.date).format("D MMM YYYY | hh:mm:ss A")}</p>
          </div>
          <GreenCheckIcon className="ml-auto shrink-0" />
         </CardHeader>
         <CardContent>
          <p className="text-[#A5ABB0]">
           <span className="font-normal text-primary-foreground">Summary:</span> {log.summary}
          </p>
         </CardContent>
         <CardFooter className="flex flex-wrap items-start gap-1">
          <p className="min-w-fit text-sm text-[#A5ABB0]" style={{ flexBasis: `calc(45% - 4px)` }}>
           <span className="font-normal text-primary-foreground">#ID:</span> {log.id}
          </p>
          <p className="min-w-fit text-sm text-[#A5ABB0]" style={{ flexBasis: `calc(55% - 4px)` }}>
           <span className="font-normal text-primary-foreground">Duration:</span> {log.duration} Mins
          </p>
         </CardFooter>
        </Card>
       );
      })
     ) : (
      <div className="col-span-full flex flex-col items-center justify-center py-16">
       <h3 className="mb-2 text-lg text-primary-foreground">No Logs Found</h3>
       <p className="text-center text-[#A5ABB0]">
        No conversation logs found for <span className="font-medium">{selectedAgentName}</span>.
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

export default CallLogs;
