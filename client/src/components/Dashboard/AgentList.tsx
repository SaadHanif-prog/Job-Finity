import AGENTS_DATA from "@/constants/agents-data";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

function AgentList({ className, onAgentSelect }: { className?: string; onAgentSelect?: () => void }) {
 const navigate = useNavigate();
 const { id } = useParams();

 const handleAgentClick = (agentId: number) => {
  navigate(`/dashboard/agent/${agentId}`);
  onAgentSelect?.();
 };

 return (
  <div
   className={cn(
    "grid grid-cols-1 gap-3 rounded-[10px] bg-[#EEF6FC] p-4 sm:grid-cols-2 lg:grid-cols-3",
    className,
   )}
  >
   {AGENTS_DATA.map(agent => {
    const isSelected = agent.id === +id!;
    return (
     <Card
      key={agent.id}
      className={cn(
       "flex gap-3 rounded-md p-[10px]",
       isSelected ? "border-2 border-[#B4DAF3]" : "border border-muted-light",
      )}
     >
      <CardContent className="flex basis-2/3 flex-col items-start gap-12 py-3 pl-3">
       <div>
        <h2 className="mb-2 font-normal h3">{agent.title}</h2>
        <p className="text-sm text-muted-dark">Lorem ipsum is a dummy or placeholder.</p>
       </div>
       <Button
        variant="outline"
        className={cn(
         "mt-auto font-normal",
         isSelected && "border-accent bg-accent text-white disabled:opacity-100",
        )}
        onClick={() => handleAgentClick(agent.id)}
        disabled={isSelected}
       >
        {isSelected ? "Selected Agent" : "Select Agent"}
       </Button>
      </CardContent>
      <CardFooter
       className="ml-auto flex max-w-[154px] basis-1/3 items-center justify-center rounded-sm"
       style={{ backgroundColor: agent.brandColor }}
      >
       <agent.logo type={agent.type} className="w-3/4" />
      </CardFooter>
     </Card>
    );
   })}
  </div>
 );
}

export default AgentList;
