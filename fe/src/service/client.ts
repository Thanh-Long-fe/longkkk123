import axios from "axios";
import { store } from "../reduxx/store";
import { clearUser, setUser } from "../reduxx/authSlice";
import { refreshToken } from "./auth";

const axiosInstance = axios.create({
  baseURL:  import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🛠 Interceptor để thêm token vào header mỗi request
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    const refreshToken = state.auth.refreshToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (refreshToken) {
      config.headers["x-refresh-token"] = refreshToken;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const state = store.getState();
    const { refreshToken: currentRefreshToken } = state.auth;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      currentRefreshToken
    ) {
      originalRequest._retry = true;

      try {
        const data = await refreshToken(currentRefreshToken);
        const newAccessToken = data.accessToken;

        const updatedUser = {
          ...state.auth,
          accessToken: newAccessToken,
        };
        store.dispatch(setUser(updatedUser));

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        store.dispatch(clearUser());
        console.log(refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
export default axiosInstance;
