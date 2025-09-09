import { Outlet } from "react-router-dom";
import DashboardHeader from "./Header";

function DashboardIndexLayout() {
 return (
  <>
   <DashboardHeader />
   <main className="mx-auto w-[80%]">
    <Outlet />
   </main>
   <footer className="mx-auto mb-12 mt-auto w-[80%] rounded-md bg-white bg-opacity-40 py-4 text-center text-muted-dark">
    © 2025 Job Finity Group All Right Reserved.
   </footer>
  </>
 );
}

export default DashboardIndexLayout;
