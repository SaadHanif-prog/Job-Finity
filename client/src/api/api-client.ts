import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { refreshAccessToken } from "./auth-api";
import store from "@/redux/store";
import { setToken, clearAuth } from "@/redux/slices/authSlice";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";

let isRefreshing = false;
let failedRequests: {
 resolve: (value: any) => void;
 reject: (reason?: any) => void;
 config: AxiosRequestConfig;
}[] = [];

let navigateFunction: NavigateFunction | null = null;

// Function to set the navigation from your App component
export const setNavigate = (navigate: NavigateFunction) => {
 navigateFunction = navigate;
};

// Function to handle logout actions
const handleLogout = () => {
 store.dispatch(clearAuth());
 toast.error("Session Expired, Please Log in");
 navigateFunction?.("/login");
};

export const apiClient = axios.create({
 baseURL:
  import.meta.env.VITE_NODE_ENV === "development"
   ? "http://localhost:5000"
   : "https://job-finity.vercel.app",
 withCredentials: true,
});

export const apiClientWithAuth = (token: string, baseUrl?: string, withCredentials: boolean = true) => {
 const client = axios.create({
  baseURL: baseUrl
   ? baseUrl
   : import.meta.env.VITE_NODE_ENV === "development"
     ? "http://localhost:5000"
     : "https://job-finity.vercel.app",
  withCredentials: withCredentials,
 });

 client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Check if this is a retry request
  const isRetry = (config as any)._retry === true;

  // Use store token only for retry requests, otherwise use the passed token
  const currentToken = isRetry ? store.getState().auth.token : token;
  if (currentToken) {
   config.headers.Authorization = `Bearer ${currentToken}`;
  }
  return config;
 });

 client.interceptors.response.use(
  (response: AxiosResponse) => {
   return response;
  },
  async (error: AxiosError) => {
   const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

   const isAuthError =
    error.response?.status === 403 &&
    error.response?.data &&
    (error.response.data as any).message === "You are not authorized to perform this action";

   if (
    isAuthError &&
    originalRequest &&
    !originalRequest._retry &&
    originalRequest.url !== "/auth/refreshAccessToken"
   ) {
    if (!isRefreshing) {
     isRefreshing = true;
     originalRequest._retry = true;

     try {
      const refreshResponse = await refreshAccessToken();
      const newAccessToken = refreshResponse.data;

      // Store the new token
      store.dispatch(setToken(newAccessToken));

      // Process queued requests
      failedRequests.forEach(request => {
       request.resolve(client(request.config));
      });
      failedRequests = [];

      // Important: when retrying the request, it will go through the request interceptor again
      return client(originalRequest);
     } catch (refreshError) {
      // Token refresh failed - handle logout process
      handleLogout();

      // Reject all queued requests
      failedRequests.forEach(request => {
       request.reject(refreshError);
      });
      failedRequests = [];

      return Promise.reject(refreshError);
     } finally {
      isRefreshing = false;
     }
    } else {
     // If already refreshing, queue this request
     return new Promise((resolve, reject) => {
      failedRequests.push({
       resolve,
       reject,
       config: originalRequest,
      });
     });
    }
   }

   // For 401 Unauthorized errors, also trigger logout
   if (error.response?.status === 401) {
    handleLogout();
   }

   return Promise.reject(error);
  },
 );

 return client;
};
