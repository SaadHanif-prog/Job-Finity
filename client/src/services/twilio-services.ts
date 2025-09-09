import { useMutation, useQueryClient } from "@tanstack/react-query";
import { outboundCall } from "@/api/api-twilio";
import toast from "react-hot-toast";

// Types
import type { OutBoundPayload } from "@/types/twilio-types";
import { AxiosError } from "axios";

type ErrorResponse = {success : string, error: string}

// Add new contact
export const useOutbound = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (callTo: OutBoundPayload) => outboundCall(callTo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data?.error || error.message);
    },
  });
};
