import { LoginPayload, LoginResponse, LogoutResponse, RefreshTokenResponse } from "@/types/auth-types";
import { ENDPOINTS } from "./constants";
import { apiClient, apiClientWithAuth } from "./api-client";
import { AxiosError } from "axios";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
 try {
  const response = await apiClient.post<LoginResponse>(`${ENDPOINTS.AUTH}/login`, payload);
  return response.data;
 } catch (error) {
  const axiosError = error as AxiosError<{ message: string }>;
  throw axiosError.response?.data || error;
 }
};

export const logout = async (token: string): Promise<LogoutResponse> => {
 try {
  const client = apiClientWithAuth(token);
  const response = await client.post<LogoutResponse>(`${ENDPOINTS.AUTH}/logout`);
  return response.data;
 } catch (error) {
  const axiosError = error as AxiosError<{ message: string }>;
  throw axiosError.response?.data || error;
 }
};

export const refreshAccessToken = async (): Promise<RefreshTokenResponse> => {
 try {
  const response = await apiClient.post<RefreshTokenResponse>(`${ENDPOINTS.AUTH}/refreshAccessToken`);
  return response.data;
 } catch (error) {
  const axiosError = error as AxiosError<{ message: string }>;
  throw axiosError.response?.data || error;
 }
};
