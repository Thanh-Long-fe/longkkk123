import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../reduxx/hook";
import type { RootState } from "../../reduxx/store";
import { clearUser, setUser } from "../../reduxx/authSlice";

// Schema validation
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  remember: yup.boolean().optional(),
});

type FormData = {
  username: string;
  password: string;
  remember?: boolean;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema as any),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    // handle login logic here
  };
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    dispatch(setUser({ _id: '123', userName: 'JohnDoe', role: 'admin' }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-8 w-full max-w-md shadow-md rounded">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login Account
        </h1>
        <h2 className="text-center text-gray-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Field */}
          <div className="relative">
            <input
              type="text"
              {...register("username")}
              placeholder="Username"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">✉️</span>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">🔒</span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Remember me & Login button */}
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("remember")}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
