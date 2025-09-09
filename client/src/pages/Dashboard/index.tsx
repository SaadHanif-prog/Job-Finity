import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AGENTS_DATA from "@/constants/agents-data";
import { useNavigate } from "react-router-dom";

function Dashboard() {
 const navigate = useNavigate();

 return (
  <>
   <section className="mb-14">
    <h1 className="mx-auto mb-2 w-fit text-center h2">Select an Agent</h1>
    <p className="mx-auto w-fit text-center text-muted-dark">Placeholder text.</p>
   </section>
   <section className="mb-20 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    {AGENTS_DATA.map(agent => {
     return (
      <Card key={agent.id} className="flex gap-3 rounded-md border border-muted-light p-[10px]">
       <CardContent className="flex basis-2/3 flex-col items-start gap-12 py-3 pl-3">
        <div>
         <h2 className="mb-2 font-normal h3">{agent.title}</h2>
         <p className="text-sm text-muted-dark">Lorem ipsum is a dummy or placeholder.</p>
        </div>
        <Button
         variant="outline"
         className="mt-auto font-normal"
         onClick={() => navigate(`/dashboard/agent/${agent.id}`)}
        >
         Select Agent
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
   </section>
  </>
 );
}

export default Dashboard;
