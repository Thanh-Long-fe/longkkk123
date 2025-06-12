import axiosInstance from "./client";

export const login = (params: { userName: string; password: string }) => {
  return axiosInstance.post("/user/login", {
    ...params,
  });
};
export const lock = (id: string, status: string) => {
  return axiosInstance.patch(`/user/action/${id}`, {
    status,
  });
};
export const updateUser = (
  id: string,
  params: {
    userName: string;
    password: string;
    name: string;
    image?: string;
    role?: string;
    status: string;
  },
) => {
  return axiosInstance.put(`/user/update/${id}`, { ...params });
};
export const getListUser = () => {
  return axiosInstance.get("/user/list");
};
export const register = (params: {
  userName: string;
  password: string;
  name: string;
  image?: string;
  role?: string;
  status: string;
}) => {
  return axiosInstance.post("/user/register", {
    ...params,
  });
};
export const refreshToken = async (refreshToken: string) => {
  const res = await axiosInstance.get("/user/refresh", {
    headers: {
      "x-refresh-token": refreshToken,
    },
  });
  return res.data; // trả về { accessToken: string }
};
