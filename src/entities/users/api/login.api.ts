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
		// const init_data = "query_id=AAH4IQEvAgAAAPghAS-45Sqt&user=%7B%22id%22%3A5083570680%2C%22first_name%22%3A%22%D0%98%D0%BB%D1%8C%D1%8F%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22zong_name%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FWDUQ8R--Rfax5N63PjOYhi3-7iDFRulG4HaPLkmOYRYey1-d8wOKKISmi5RQ1Dw6.svg%22%7D&auth_date=1744541246&signature=dBJdKwj1W96NqimGGMjIIIW10AABPLA4w0mKoekkfjYTAtWZxfw1hJfN_YVvHkdZbIhwhPnDcIY5f6mw148SAw&hash=e15096b01b804b8c9f8ce30ead8a2830f757564003b8412bad27b67e4659b124"
    // formData.append("init_data", init_data);
    const formData = new URLSearchParams();
    // formData.append("init_data", retrieveRawInitData() || "");
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
      "/auth/refresh",
      { refreshToken: localStorage.getItem("refreshToken") }
    );

    return (await req).data;
  }

  clearAuthData() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}
