// import {
//  LineChart,
//  Line,
//  AreaChart,
//  Area,
//  PieChart,
//  Pie,
//  Cell,
//  XAxis,
//  YAxis,
//  CartesianGrid,
//  Tooltip,
//  Legend,
//  ResponsiveContainer,
// } from "recharts";

// const performanceData = [
//  { month: "Jan", agents: 45, resolved: 320, satisfaction: 4.2 },
//  { month: "Feb", agents: 52, resolved: 380, satisfaction: 4.1 },
//  { month: "Mar", agents: 48, resolved: 425, satisfaction: 4.4 },
//  { month: "Apr", agents: 61, resolved: 467, satisfaction: 4.3 },
//  { month: "May", agents: 55, resolved: 502, satisfaction: 4.5 },
//  { month: "Jun", agents: 67, resolved: 578, satisfaction: 4.6 },
// ];

// const ticketCategories = [
//  { name: "Technical Support", value: 35, color: "#3b82f6" },
//  { name: "Billing Issues", value: 25, color: "#10b981" },
//  { name: "Product Questions", value: 20, color: "#f59e0b" },
//  { name: "Bug Reports", value: 15, color: "#ef4444" },
//  { name: "Feature Requests", value: 5, color: "#8b5cf6" },
// ];

// const hourlyActivity = [
//  { hour: "6AM", tickets: 12 },
//  { hour: "7AM", tickets: 25 },
//  { hour: "8AM", tickets: 45 },
//  { hour: "9AM", tickets: 78 },
//  { hour: "10AM", tickets: 95 },
//  { hour: "11AM", tickets: 88 },
//  { hour: "12PM", tickets: 102 },
//  { hour: "1PM", tickets: 110 },
//  { hour: "2PM", tickets: 125 },
//  { hour: "3PM", tickets: 118 },
//  { hour: "4PM", tickets: 95 },
//  { hour: "5PM", tickets: 75 },
//  { hour: "6PM", tickets: 45 },
//  { hour: "7PM", tickets: 28 },
// ];

// function AgentGraphs() {
//  return (
//   <section className="mb-24 mt-4">
//    <main className="rounded-md border border-muted-light bg-white p-9">
//     <div className="mb-7">
//      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Call Simulation & Initiation</h2>
//      <p className="text-[#A5ABB0]">Lorem ipsum is a dummy or placeholder.</p>
//     </div>
//     <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
//      <div className="rounded-xl bg-white">
//       <h2 className="mb-4 text-[#A5ABB0] underline">Performance Trends:</h2>
//       <ResponsiveContainer width="100%" height={300}>
//        <LineChart data={performanceData}>
//         <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//         <XAxis dataKey="month" stroke="#64748b" />
//         <YAxis stroke="#64748b" />
//         <Tooltip
//          contentStyle={{
//           backgroundColor: "#1e293b",
//           border: "none",
//           borderRadius: "8px",
//           color: "#fff",
//          }}
//         />
//         <Legend />
//         <Line
//          type="monotone"
//          dataKey="agents"
//          stroke="#3b82f6"
//          strokeWidth={3}
//          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
//          name="Active Agents"
//         />
//         <Line
//          type="monotone"
//          dataKey="resolved"
//          stroke="#10b981"
//          strokeWidth={3}
//          dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
//          name="Tickets Resolved"
//         />
//        </LineChart>
//       </ResponsiveContainer>
//      </div>
//      <div className="rounded-xl bg-white">
//       <h2 className="mb-4 text-[#A5ABB0] underline">Ticket Categories:</h2>
//       <ResponsiveContainer width="100%" height={300}>
//        <PieChart>
//         <Pie
//          data={ticketCategories}
//          cx="50%"
//          cy="50%"
//          outerRadius={100}
//          fill="#8884d8"
//          dataKey="value"
//          labelLine={false}
//         >
//          {ticketCategories.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={entry.color} />
//          ))}
//         </Pie>
//         <Tooltip
//          contentStyle={{
//           backgroundColor: "#43A2E2",
//           border: "none",
//           borderRadius: "8px",
//           padding: "0 12px",
//          }}
//          itemStyle={{ color: "#fff" }}
//          labelStyle={{ color: "#fff" }}
//         />
//         <Legend verticalAlign="bottom" height={60} iconType="circle" />
//        </PieChart>
//       </ResponsiveContainer>
//      </div>
//     </div>

//     <div className="space-y-8">
//      <div className="rounded-xl bg-white">
//       <h2 className="mb-4 text-[#A5ABB0] underline">Hourly Ticket Volume:</h2>
//       <ResponsiveContainer width="100%" height={250}>
//        <AreaChart data={hourlyActivity}>
//         <defs>
//          <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
//           <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
//          </linearGradient>
//         </defs>
//         <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//         <XAxis dataKey="hour" stroke="#64748b" />
//         <YAxis stroke="#64748b" />
//         <Tooltip
//          contentStyle={{
//           backgroundColor: "#1e293b",
//           border: "none",
//           borderRadius: "8px",
//           color: "#fff",
//          }}
//         />
//         <Area
//          type="monotone"
//          dataKey="tickets"
//          stroke="#3b82f6"
//          fillOpacity={1}
//          fill="url(#colorTickets)"
//          strokeWidth={2}
//         />
//        </AreaChart>
//       </ResponsiveContainer>
//      </div>

//      <div className="rounded-xl bg-white">
//       <h2 className="mb-4 text-[#A5ABB0] underline">Customer Satisfaction Trend:</h2>
//       <ResponsiveContainer width="100%" height={250}>
//        <LineChart data={performanceData}>
//         <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//         <XAxis dataKey="month" stroke="#64748b" />
//         <YAxis domain={[3.5, 5]} stroke="#64748b" />
//         <Tooltip
//          contentStyle={{
//           backgroundColor: "#1e293b",
//           border: "none",
//           borderRadius: "8px",
//           color: "#fff",
//          }}
//          formatter={value => [`${value}/5`, "Satisfaction Score"]}
//         />
//         <Line
//          type="monotone"
//          dataKey="satisfaction"
//          stroke="#f59e0b"
//          strokeWidth={4}
//          dot={{ fill: "#f59e0b", strokeWidth: 2, r: 6 }}
//          activeDot={{ r: 8, stroke: "#f59e0b", strokeWidth: 2 }}
//         />
//        </LineChart>
//       </ResponsiveContainer>
//      </div>
//     </div>
//    </main>
//   </section>
//  );
// }

// export default AgentGraphs;







import LEADS_DATA from "@/constants/leads-data";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

function AgentGraphs() {
  const [totalLeads, setTotalLeads] = useState(0);
  const [callsMade, setCallsMade] = useState(0);

  useEffect(() => {
    setTotalLeads(LEADS_DATA.length);

    const outBoundCalls: string[] = JSON.parse(
      localStorage.getItem("outboundCalls") || "[]"
    );

    setCallsMade(outBoundCalls.length);
  }, []);

  // Remaining leads not yet called
  const notCalled = Math.max(totalLeads - callsMade, 0);

  // For line chart
  const performanceData = [
    { label: "Total Leads", value: totalLeads },
    { label: "Calls Made", value: callsMade },
    { label: "Remaining", value: notCalled },
  ];

  // For pie chart
  const pieData = [
    { name: `Total Leads (${totalLeads})`, value: totalLeads, color: "#3b82f6" },
    { name: `Calls Made (${callsMade})`, value: callsMade, color: "#10b981" },
    { name: `Not Called (${notCalled})`, value: notCalled, color: "#ef4444" },
  ];

  // --- Y Axis scaling ---
  const max = Math.max(totalLeads, callsMade);
  const step = 5; 
  const domainMax = Math.max(50, Math.ceil(max / step) * step); 
  const ticks = Array.from(
    { length: domainMax / step + 1 },
    (_, i) => i * step
  );

  return (
    <section className="mb-24 mt-4">
      <main className="rounded-md border border-muted-light bg-white p-9">
        <div className="mb-7">
          <h2 className="mb-1 font-normal tracking-[-0.04em] h3">
            Lead & Call Performance
          </h2>
          <p className="text-[#A5ABB0]">
            Tracking total leads and outbound calls.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Line Chart */}
          <div className="rounded-xl bg-white">
            <h2 className="mb-4 text-[#A5ABB0] underline">Leads vs Calls</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="label" stroke="#64748b" />
                <YAxis
                  stroke="#64748b"
                  allowDecimals={false}
                  domain={[0, domainMax]}
                  ticks={ticks}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                  name="Count"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="rounded-xl bg-white">
            <h2 className="mb-4 text-[#A5ABB0] underline">Lead Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0 12px",
                  }}
                  itemStyle={{ color: "#fff" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend verticalAlign="bottom" height={60} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </section>
  );
}

export default AgentGraphs;

