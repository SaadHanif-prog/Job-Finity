import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function NotFound() {
 const navigate = useNavigate();

 return (
  <>
   <h1 className="text-primary mb-6 text-[48px] font-semibold tracking-[-2%]">404</h1>
   <p className="text-primary mb-6 tracking-[-2%]">The page you requested is not found.</p>
   <Button type="button" className="bg-primary text-sm tracking-[-2%]" onClick={() => navigate("/")}>
    Go back to Home
   </Button>
  </>
 );
}

export default NotFound;
