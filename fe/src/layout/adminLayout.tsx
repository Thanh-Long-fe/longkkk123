// src/layouts/AdminLayout.tsx
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function AdminLayout() {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex flex-col flex-1 min-h-screen bg-gray-100">
      <Header />
      <main className="p-6"><Outlet/></main>
    </div>
  </div>
  );
}
