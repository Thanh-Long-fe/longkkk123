import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useAppSelector } from "../reduxx/hook";
import FullScreenLoading from "../components/Loading/Loading";

export default function AdminLayout() {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!auth || !auth._id) {
      navigate("/admin/login", { replace: true });
    } else {
      setChecked(true);
    }
  }, [auth, navigate]);

  if (!checked) return <FullScreenLoading open={true} />; // Hoặc loading...

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
