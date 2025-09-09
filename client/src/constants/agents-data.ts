import JobFinityLogo from "@/components/JobFinityLogo";
import BookkeepingUs from "@/pages/Agents/bookkeeping-us";
import CyberSecurity from "@/pages/Agents/cyber-security";
import FractionalFd from "@/pages/Agents/fractional-fd";
import Insurance from "@/pages/Agents/insurance";
import Outsourcing from "@/pages/Agents/outsourcing";
import Systems from "@/pages/Agents/systems";

type AgentType =
 | "bookkeeping-us"
 | "cyber-security"
 | "fractional-fd"
 | "insurance"
 | "outsourcing"
 | "systems";

interface Agent {
 id: number;
 title: string;
 description: string;
 brandColor: string;
 type: AgentType;
 logo: ({
  type,
  className,
  ...props
 }: {
  type?: AgentType;
  className?: string;
 } & React.SVGProps<SVGSVGElement>) => JSX.Element;
 page: () => JSX.Element;
}

const AGENTS_DATA: Agent[] = [
 {
  id: 1,
  title: "Outsourcing",
  description: "Lorem Ipsum is a dummy or placeholder.",
  brandColor: "#DCF7FC",
  type: "outsourcing",
  logo: JobFinityLogo,
  page: Outsourcing,
 },
 {
  id: 2,
  title: "Insurance",
  description: "Lorem Ipsum is a dummy or placeholder.",
  brandColor: "#FFF0E8",
  type: "insurance",
  logo: JobFinityLogo,
  page: Insurance,
 },
 {
  id: 3,
  title: "Cyber Security",
  description: "Lorem Ipsum is a dummy or placeholder.",
  brandColor: "#FFF3EF",
  type: "cyber-security",
  logo: JobFinityLogo,
  page: CyberSecurity,
 },
 {
  id: 4,
  title: "Systems",
  description: "Lorem Ipsum is a dummy or placeholder.",
  brandColor: "#FFF7FB",
  type: "systems",
  logo: JobFinityLogo,
  page: Systems,
 },
 {
  id: 5,
  title: "Bookkeeping US",
  description: "Lorem Ipsum is a dummy or placeholder.",
  brandColor: "#F4FFF5",
  type: "bookkeeping-us",
  logo: JobFinityLogo,
  page: BookkeepingUs,
 },
 {
  id: 6,
  title: "Fractional FD",
  description: "Lorem Ipsum is a dummy or placeholder.",
  brandColor: "#FFF7E5",
  type: "fractional-fd",
  logo: JobFinityLogo,
  page: FractionalFd,
 },
];

export default AGENTS_DATA;
