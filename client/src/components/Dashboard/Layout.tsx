import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import DashboardHeader from "./Header";
import ChangeCircleIcon from "@/assets/icons/change-circle.svg?react";
import { Button } from "@/components/ui/button";
import AGENTS_DATA from "@/constants/agents-data";
import AgentList from "./AgentList";

function DashboardLayout() {
 const { id } = useParams();
 const [showAgentList, setShowAgentList] = useState(false);
 const AGENT = AGENTS_DATA.find(a => a.id === +id!)!;

 const toggleAgentList = () => {
  setShowAgentList(prev => !prev);
 };

 const handleAgentSelect = () => {
  setShowAgentList(false);
 };

 return (
  <>
   <DashboardHeader />
   <section className="mx-auto mb-10 flex w-[80%] items-center justify-between lg:w-[70%]">
    <div className="flex items-center gap-6">
     <div
      className="flex aspect-square max-w-[154px] shrink-0 basis-1/3 items-center justify-center rounded-full"
      style={{ backgroundColor: AGENT.brandColor }}
     >
      <AGENT.logo type={AGENT.type} className="w-3/4" />
     </div>
     <div>
      <h1 className="mb-2 h2">{AGENT.title}</h1>
      <p className="text-[#A5ABB0]">{AGENT.description}</p>
     </div>
    </div>
    <Button variant="outline" className="font-normal" onClick={toggleAgentList}>
     <ChangeCircleIcon className="!size-6" />
     Change Agent
    </Button>
   </section>
   <main className="relative z-[1] mx-auto w-[80%] lg:w-[70%]">
    <Outlet />
    {showAgentList && <AgentList className="absolute top-0 z-[3] w-full" onAgentSelect={handleAgentSelect} />}
    {showAgentList && <div className="overlay"></div>}
   </main>
  </>
 );
}

export default DashboardLayout;
