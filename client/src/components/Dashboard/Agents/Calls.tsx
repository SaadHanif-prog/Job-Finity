import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import CautionIcon from "@/assets/icons/caution.svg?react";
import DialpadIcon from "@/assets/icons/dialpad.svg?react";
import RealOutboundCallIcon from "@/assets/icons/real-outbound-call.svg?react";
import InboundCallIcon from "@/assets/icons/inbound-call.svg?react";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useOutbound } from "@/services/twilio-services";

let callAcceptingTimerId: any;

const formSchema = z.object({
 phoneNumber: z
  .string()
  .min(13, "Phone number must be at least 13 characters")
  .max(14, "Phone number must be at most 14 characters")
  .regex(/^\+?[0-9\-\(\)]+$/, "Please enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

type CallType = "outbound" | "inbound" | null;

function AgentCalls() {
const {mutate : outBoundCall} = useOutbound()

 const [isCallModalOpen, setIsCallModalOpen] = useState(false);
 const [callType, setCallType] = useState<CallType>(null);
 const [callDuration, setCallDuration] = useState(0);
 const [modalCallStatus, setModalCallStatus] = useState("");
 const [isListening, setIsListening] = useState(false);
 

 const {
  control,
  handleSubmit,
  getValues,
  formState: { errors },
 } = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   phoneNumber: "+",
  },
 });

 useEffect(() => {
  let interval: NodeJS.Timeout;
  if (isCallModalOpen && modalCallStatus === "Connected") {
   interval = setInterval(() => {
    setCallDuration(prev => prev + 1);
   }, 1000);
  }
  return () => clearInterval(interval);
 }, [isCallModalOpen, modalCallStatus]);

 const formatDuration = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
 };

 
// const normalizeNumber = (num: string) =>
//   num.replace(/\D/g, ""); 


 const onSubmit = (data: FormData) => {
  console.log("Form submitted:", data);

  outBoundCall({callTo: data.phoneNumber})

  // Dummy Simulation /////////////////////

// const normalized = normalizeNumber(data.phoneNumber);
// const existing: string[] = JSON.parse(localStorage.getItem("outboundCalls") || "[]");

// if (!existing.includes(normalized)) {
//   existing.push(normalized);
//   localStorage.setItem("outboundCalls", JSON.stringify(existing));
// }

  /////////////////////////////////////
  // console.log("Existing phone numbers", existing)
  setCallType("outbound");
  setIsCallModalOpen(true);
  setCallDuration(0);
  setModalCallStatus("Initiating call...");
  setIsListening(false);

  setTimeout(() => {
   setModalCallStatus("Ringing...");
  }, 1000);

  callAcceptingTimerId = setTimeout(() => {
   setModalCallStatus("Connected");
  }, 3000);
 };

 const handleSimulateInbound = () => {
  setCallType("inbound");
  setIsCallModalOpen(true);
  setCallDuration(0);
  setModalCallStatus("Incoming call...");
  setIsListening(false);
 };

 const handleAcceptCall = () => {
  setModalCallStatus("Connected");
 };

 const handleHangUp = () => {
  setModalCallStatus("Call ended");
  setIsListening(false);

  setTimeout(() => {
   setIsCallModalOpen(false);
   setTimeout(() => {
    setCallType(null);
    setCallDuration(0);
    setModalCallStatus("");
   }, 300);
  }, 1500);
 };

 const handleCancelCall = () => {
  setModalCallStatus("Call cancelled");
  setIsListening(false);
  clearTimeout(callAcceptingTimerId);

  setTimeout(() => {
   setIsCallModalOpen(false);
   setTimeout(() => {
    setCallType(null);
    setCallDuration(0);
    setModalCallStatus("");
   }, 300);
  }, 1000);
 };

 return (
  <>
   <section className="mb-24 mt-4 flex flex-col rounded-md">
    <main className="rounded-md border border-muted-light bg-white p-9">
     <div className="mb-7">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Call Simulation & Initiation</h2>
      <p className="text-[#A5ABB0]">Lorem ipsum is a dummy or placeholder.</p>
     </div>

     <Alert className="mb-10 flex items-center gap-5 bg-[#FFF6E1] p-0 pl-6">
      <CautionIcon className="h-10 w-10" />
      <div className="w-full py-5 pr-5">
       <AlertTitle className="mb-1 font-normal h4">Action Required</AlertTitle>
       <AlertDescription>Please generate Lorem ipsum is a dummy or placeholder.</AlertDescription>
      </div>
     </Alert>

     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <div>
       <Label className="mb-2 block font-normal" htmlFor="phoneNumber">
        Phone No. (for Outbound calls)
       </Label>
       <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { value, onChange } }) => (
         <div className="relative">
          <DialpadIcon className="absolute left-5 top-1/2 !size-6 -translate-y-1/2" />
          <Input
           id="phoneNumber"
           placeholder="+2311234567890"
           className={cn("h-14 pl-16", errors.phoneNumber ? "border-red-500 focus-visible:ring-red-500" : "")}
           value={value}
           onChange={e => {
            (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(
             /[^0-9+]/g,
             "",
            );
            onChange(e.target.value);
           }}
          />
         </div>
        )}
       />

       {errors.phoneNumber && <p className="mt-2 text-sm text-red-500">{errors.phoneNumber.message}</p>}
      </div>

      <div className="flex gap-4">
       <Button
        className="h-auto bg-slate-900 px-5 py-3 text-base text-slate-50 hover:bg-slate-900/90"
        disabled={isCallModalOpen}
        type="submit"
       >
        <RealOutboundCallIcon className="!size-6" />
        Start Real Outbound Call
       </Button>

       <Button
        variant="outline"
        onClick={handleSimulateInbound}
        className="h-auto px-5 py-3 text-base"
        disabled={isCallModalOpen}
        type="button"
       >
        <InboundCallIcon className="!size-6" />
        Simulate Inbound Call
       </Button>
      </div>
     </form>
    </main>
   </section>

   <Dialog
    open={isCallModalOpen}
    onOpenChange={open => {
     if (!open) {
      return;
     }
    }}
   >
    <DialogContent className="font-mona-sans sm:max-w-md [&>button]:hidden">
     <DialogHeader>
      <DialogTitle className="flex items-center gap-2">
       {callType === "outbound" ? (
        <>
         <RealOutboundCallIcon className="!size-6 text-black" />
         Outbound Call
        </>
       ) : (
        <>
         <InboundCallIcon className="!size-6" />
         Inbound Call
        </>
       )}
      </DialogTitle>
      <DialogDescription>
       {callType === "outbound" ? `Calling ${getValues().phoneNumber}` : "Incoming call simulation"}
      </DialogDescription>
     </DialogHeader>

     <div className="flex flex-col items-center gap-6 py-4">
      <div className="relative z-[1] flex flex-col items-center gap-3">
       <div
        className={cn(
         "z-[-1] flex h-20 w-20 items-center justify-center rounded-full",
         modalCallStatus === "Connected"
          ? "bg-green-100"
          : modalCallStatus === "Incoming call..."
            ? "bg-yellow-100"
            : modalCallStatus === "Call ended" || modalCallStatus === "Call cancelled"
              ? "bg-red-100"
              : "animate-bounce bg-blue-100",
        )}
       >
        {callType === "outbound" ? (
         <RealOutboundCallIcon className="z-[1] !size-8 text-black" />
        ) : (
         <InboundCallIcon className="z-[1] !size-8 text-black" />
        )}
       </div>

       <div className="text-center">
        <p className="text-lg font-medium">{modalCallStatus}</p>
        {modalCallStatus === "Connected" && (
         <p className="text-muted-foreground text-sm">{formatDuration(callDuration)}</p>
        )}
        {isListening && modalCallStatus === "Connected" && <p className="text-sm">🎧 Listening...</p>}
       </div>
      </div>

      {callType === "outbound" && (
       <div className="text-center">
        <p className="text-muted-foreground text-sm">Phone Number</p>
        <p className="font-mono text-lg">{getValues().phoneNumber}</p>
       </div>
      )}

      <div className="flex gap-3">
       {callType === "inbound" && modalCallStatus === "Incoming call..." ? (
        <>
         <Button onClick={handleAcceptCall} className="bg-green-600 px-8 hover:bg-green-700">
          Accept Call
         </Button>
         <Button onClick={handleCancelCall} variant="destructive" className="px-8">
          Decline
         </Button>
        </>
       ) : modalCallStatus === "Connected" ? (
        <>
         <Button
          onClick={() => setIsListening(prev => !prev)}
          variant={isListening ? "secondary" : "default"}
          className="px-8"
         >
          {isListening ? "Stop Listening" : "Listen to Call"}
         </Button>
         <Button onClick={handleHangUp} variant="destructive" className="px-8">
          Hang Up
         </Button>
        </>
       ) : modalCallStatus === "Call ended" || modalCallStatus === "Call cancelled" ? null : (
        <Button onClick={handleCancelCall} variant="destructive" className="px-8">
         Cancel
        </Button>
       )}
      </div>
     </div>
    </DialogContent>
   </Dialog>
  </>
 );
}

export default AgentCalls;
