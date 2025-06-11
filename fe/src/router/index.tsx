import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLayout from "../layout/clientLayout";
import AdminLayout from "../layout/adminLayout";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import VeNoiDia from "../pages/VeNoiDia/VeNoiDia";
import VeHaNoi from "../pages/VeNoiDia/VeHaNoi";
import VeSaiGon from "../pages/VeNoiDia/VeSaiGon";
import TinKhuyenMai from "../pages/TInKhuyenMai/TInKhuyenMai";
import VeTheoHang from "../pages/VeTheoHang/VeTheoHang";
import LoginForm from "../pages/Login/Login";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import UserManagement from "../pages/User/User";
import RequestManament from "../pages/Request/Request";

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Đang tải...</div>}>
        <Routes>
          {/* Client layout */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/tin-khuyen-mai" element={<TinKhuyenMai />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/ve-noi-dia" element={<VeNoiDia />} />
            <Route path="/ve-theo-hang" element={<VeTheoHang />} />
            <Route
              path="/ve-noi-dia/ve-may-bay-di-ha-noi"
              element={<VeHaNoi />}
            />
            <Route
              path="/ve-noi-dia/ve-may-bay-di-sai-gon"
              element={<VeSaiGon />}
            />
          </Route>

          {/* Admin layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/requests" element={<RequestManament />} />

          </Route>
          <Route path="/admin/login" element={<LoginForm />} />

          {/* 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
