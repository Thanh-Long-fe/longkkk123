import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLayout from "../layout/clientLayout";
import AdminLayout from "../layout/adminLayout";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";

function Router() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Đang tải...</div>}>
          <Routes>
            {/* Client layout */}
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<Home />} />
            </Route>
  
            {/* Admin layout */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashBoard />} />
            </Route>
  
            {/* 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
}
export default Router