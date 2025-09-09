import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatIcon from "@/assets/icons/chat.svg?react";
import ScriptIcon from "@/assets/icons/script.svg?react";
import LayoutIcon from "@/assets/icons/layout.svg?react";
import CallsIcon from "@/assets/icons/calls.svg?react";
import AgentChat from "@/components/Dashboard/Agents/Chat";
import AgentScript from "@/components/Dashboard/Agents/Script";
import AgentSocialTools from "@/components/Dashboard/Agents/Systems/SocialTools";
import AgentCalls from "@/components/Dashboard/Agents/Calls";

function Systems() {
 return (
  <Tabs defaultValue="chat">
   <TabsList className="flex w-full gap-4 rounded-full bg-[#EEF6FC]">
    <TabsTrigger value="chat" className="flex grow gap-[6px] py-4">
     <ChatIcon className="shrink-0" /> Chat
    </TabsTrigger>
    <TabsTrigger value="script" className="flex grow gap-[6px] py-4">
     <ScriptIcon className="shrink-0" /> Script
    </TabsTrigger>
    <TabsTrigger value="social-tools" className="flex grow gap-[6px] py-4">
     <LayoutIcon className="shrink-0" /> Social Tools
    </TabsTrigger>
    <TabsTrigger value="calls" className="flex grow gap-[6px] py-4">
     <CallsIcon className="shrink-0" /> Calls
    </TabsTrigger>
   </TabsList>
   <TabsContent value="chat">
    <AgentChat />
   </TabsContent>
   <TabsContent value="script">
    <AgentScript />
   </TabsContent>
   <TabsContent value="social-tools">
    <AgentSocialTools />
   </TabsContent>
   <TabsContent value="calls">
    <AgentCalls />
   </TabsContent>
  </Tabs>
 );
}

export default Systems;
