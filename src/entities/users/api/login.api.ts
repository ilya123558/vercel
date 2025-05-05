import axios, { AxiosInstance } from "axios";
import { ILoginByInitDataResponse } from "../types/login";
import { retrieveRawInitData } from "@telegram-apps/bridge";

export class LoginApiClient {
  protected readonly axiosInstance: AxiosInstance;
  private readonly bannedApiLinks = ["/users/loginByInitData", "/auth/refresh"];

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token && this.bannedApiLinks.every((l) => !config.url?.endsWith(l))) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          this.bannedApiLinks.every((l) => !originalRequest.url?.endsWith(l))
        ) {
          originalRequest._retry = true;

          try {
            const newTokens = await this.refreshToken();
            localStorage.setItem("accessToken", newTokens.access);
            localStorage.setItem("refreshToken", newTokens.refresh);
            originalRequest.headers.Authorization = `Bearer ${newTokens.access}`;
            return this.axiosInstance(originalRequest);
          } catch (loginError) {
            console.log("Refresh token failed", loginError);
            this.clearAuthData();
            // Можно добавить редирект на страницу входа
            return Promise.reject(loginError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  async loginByInitData(init_data: string): Promise<ILoginByInitDataResponse> {
    const formData = new URLSearchParams();
    formData.append("init_data", init_data);

		const response = await this.axiosInstance.post<ILoginByInitDataResponse>(
      "/users/loginByInitData",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    localStorage.setItem("accessToken", response.data.user.accessToken);
    localStorage.setItem("refreshToken", response.data.user.refreshToken);

    return response.data;
  }

  async refreshToken() {
    const req = this.axiosInstance.post<Omit<ILoginByInitDataResponse, "user">>(
      "/users/refresh",
      { refreshToken: localStorage.getItem("refreshToken") }
    );

    return (await req).data;
  }

  clearAuthData() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}
