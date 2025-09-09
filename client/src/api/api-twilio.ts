import { apiClient } from "../api/api-client";

import type { OutBoundPayload, OutBoundApiResponse} from "@/types/twilio-types";

import { ENDPOINTS } from "./constants";


// Twilio Outbound Call
export const outboundCall = async (callTo: OutBoundPayload): Promise<OutBoundApiResponse> => {
  const { data } = await apiClient.post<OutBoundApiResponse>(`/${ENDPOINTS.Twilio}/outbound`, callTo);
  return data;
};

