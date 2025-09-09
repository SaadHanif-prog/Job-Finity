import LogoIcon from "@/assets/logo-icon.svg?react";
import LogoFullVertical from "@/assets/logo-full-vertical.svg?react";
import LogoFullHorizontal from "@/assets/logo-full-horizontal.svg?react";
import AgentBookkeepingUsLogo from "@/assets/agent-bookkeeping-us-logo.svg?react";
import AgentCyberSecurityLogo from "@/assets/agent-cyber-security-logo.svg?react";
import AgentFractionalFdLogo from "@/assets/agent-fractional-fd-logo.svg?react";
import AgentInsuranceLogo from "@/assets/agent-insurance-logo.svg?react";
import AgentOutsourcingLogo from "@/assets/agent-outsourcing-logo.svg?react";
import AgentSystemsLogo from "@/assets/agent-systems-logo.svg?react";
import { cn } from "@/lib/utils";

function JobFinityLogo({
 type,
 className,
 ...props
}: {
 type?:
  | "icon"
  | "full-vertical"
  | "full-horizontal"
  | "bookkeeping-us"
  | "cyber-security"
  | "fractional-fd"
  | "insurance"
  | "outsourcing"
  | "systems";
 className?: string;
} & React.SVGProps<SVGSVGElement>) {
 return (
  <>
   {type === "full-vertical" ? (
    <LogoFullVertical className={cn(className)} {...props} />
   ) : type === "full-horizontal" ? (
    <LogoFullHorizontal className={cn(className)} {...props} />
   ) : type === "bookkeeping-us" ? (
    <AgentBookkeepingUsLogo className={cn(className)} {...props} />
   ) : type === "cyber-security" ? (
    <AgentCyberSecurityLogo className={cn(className)} {...props} />
   ) : type === "fractional-fd" ? (
    <AgentFractionalFdLogo className={cn(className)} {...props} />
   ) : type === "insurance" ? (
    <AgentInsuranceLogo className={cn(className)} {...props} />
   ) : type === "outsourcing" ? (
    <AgentOutsourcingLogo className={cn(className)} {...props} />
   ) : type === "systems" ? (
    <AgentSystemsLogo className={cn(className)} {...props} />
   ) : (
    <LogoIcon className={cn(className)} {...props} />
   )}
  </>
 );
}

export default JobFinityLogo;
