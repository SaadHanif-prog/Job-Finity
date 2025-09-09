import JobFinityLogo from "../JobFinityLogo";
import { Button } from "@/components/ui/button";
import LogsIcon from "@/assets/icons/history-clock.svg?react";
// import AiGlitter from "@/assets/icons/ai-glitter.svg?react";
import { Link } from "react-router-dom";

function DashboardHeader() {
 return (
  <>
   <header className="mx-auto mb-14 mt-9 flex w-[80%] justify-between border-b border-muted-light py-6">
    <Link to="/dashboard">
     <JobFinityLogo type="full-horizontal" className="w-40" />
    </Link>
    <div className="flex gap-2">
     {/* <Link to="/dashboard/leads">
      <Button variant="ghost">
       <AiGlitter className="!size-6" />
       Leads
      </Button>
     </Link> */}
     <Link to="/dashboard/call-logs">
      <Button variant="ghost">
       <LogsIcon className="!size-6" />
       Logs
      </Button>
     </Link>
    </div>
   </header>
  </>
 );
}

export default DashboardHeader;
