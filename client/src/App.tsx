import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./Layout";
import Login from "./pages/Auth/Login";
import { Toaster } from "react-hot-toast";
import AuthGuard from "./lib/AuthGuard";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { setNavigate } from "./api/api-client";
import DashboardLayout from "./components/Dashboard/Layout";
import Dashboard from "./pages/Dashboard";
import DashboardIndexLayout from "./components/Dashboard/IndexLayout";
import Agent from "./pages/Dashboard/agent";
import CallLogs from "./pages/Dashboard/call-logs";
// import Leads from "./pages/Dashboard/leads";

function App() {
 const navigate = useNavigate();

 useEffect(() => {
  setNavigate(navigate);
 }, [navigate]);

 return (
  <>
   <Routes>
    <Route path="/" element={<MainLayout />}>
     <Route path="" element={<Navigate to="/login" />} />
     <Route path="/login" element={<Login />} />
     <Route path="" element={<AuthGuard />}>
      <Route path="/dashboard" element={<DashboardIndexLayout />}>
       <Route path="" element={<Dashboard />} />
       <Route path="call-logs" element={<CallLogs />} />
       {/* <Route path="leads" element={<Leads />} /> */}
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
       <Route path="agent">
        <Route path=":id" element={<Agent />} />
       </Route>
      </Route>
     </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
   </Routes>
   <Toaster />
  </>
 );
}

export default App;
