import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatIcon from "@/assets/icons/chat.svg?react";
// import ScriptIcon from "@/assets/icons/script.svg?react";
// import SocialToolsIcon from "@/assets/icons/layout.svg?react";
import CallsIcon from "@/assets/icons/calls.svg?react";
import AgentChat from "@/components/Dashboard/Agents/Chat";
// import AgentScript from "@/components/Dashboard/Agents/Script";
import AgentCalls from "@/components/Dashboard/Agents/Calls";
// import AgentSocialTools from "@/components/Dashboard/Agents/Outsourcing/SocialTools";
import { BarChart2 } from "lucide-react";
import AgentGraphs from "@/components/Dashboard/Agents/Outsourcing/Graphs";

function Outsourcing() {
 return (
  <Tabs defaultValue="chat">
   <TabsList className="flex w-full gap-4 rounded-full bg-[#EEF6FC]">
    <TabsTrigger value="chat" className="flex grow gap-[6px] py-4">
     <ChatIcon className="shrink-0" /> Data
    </TabsTrigger>
    {/* <TabsTrigger value="script" className="flex grow gap-[6px] py-4">
     <ScriptIcon className="shrink-0" /> Script
    </TabsTrigger> */}
    {/* <TabsTrigger value="social Tools" className="flex grow gap-[6px] py-4">
     <SocialToolsIcon className="shrink-0" /> Social Tools
    </TabsTrigger> */}
    <TabsTrigger value="graphs" className="flex grow gap-[6px] py-4">
     <BarChart2 className="shrink-0" /> Graphs
    </TabsTrigger>
    <TabsTrigger value="calls" className="flex grow gap-[6px] py-4">
     <CallsIcon className="shrink-0" /> Calls
    </TabsTrigger>
   </TabsList>
   <TabsContent value="chat">
    <AgentChat />
   </TabsContent>
   {/* <TabsContent value="script">
    <AgentScript />
   </TabsContent> */}
   {/* <TabsContent value="social Tools">
    <AgentSocialTools />
   </TabsContent> */}
   <TabsContent value="graphs">
    <AgentGraphs />
   </TabsContent>
   <TabsContent value="calls">
    <AgentCalls />
   </TabsContent>
  </Tabs>
 );
}

export default Outsourcing;
