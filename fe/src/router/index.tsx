import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLayout from "../layout/clientLayout";
import AdminLayout from "../layout/adminLayout";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
function Router() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Đang tải...</div>}>
          <Routes>
            {/* Client layout */}
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<Home />} />
              <Route path="/gioi-thieu" element={<About />} />
              <Route path="/lien-he" element={<Contact />} />
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