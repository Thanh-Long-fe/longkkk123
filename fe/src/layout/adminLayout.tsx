// src/layouts/AdminLayout.tsx
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useAppSelector } from "../reduxx/hook";

export default function AdminLayout() {
  const auth = useAppSelector((state) => state.auth);

  if (!auth || !auth._id) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-screen bg-gray-100">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
