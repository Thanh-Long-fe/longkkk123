import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullScreenLoading from "../components/Loading/Loading";

// Lazy-loaded layouts
const ClientLayout = lazy(() => import("../layout/clientLayout"));
const AdminLayout = lazy(() => import("../layout/adminLayout"));

// Lazy-loaded client pages
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const VeNoiDia = lazy(() => import("../pages/VeNoiDia/VeNoiDia"));
const VeHaNoi = lazy(() => import("../pages/VeNoiDia/VeHaNoi"));
const VeSaiGon = lazy(() => import("../pages/VeNoiDia/VeSaiGon"));
const TinKhuyenMai = lazy(() => import("../pages/TInKhuyenMai/TInKhuyenMai"));
const VeTheoHang = lazy(() => import("../pages/VeTheoHang/VeTheoHang"));
const LoginForm = lazy(() => import("../pages/Login/Login"));
const VeQuocTe = lazy(() => import("../pages/VeQuocTe/VeQuocTe"));
const TinCongTy = lazy(() => import("../pages/TinCongTy/TinCongTy"));
const TinTuc = lazy(() => import("../pages/TinTuc/TinTuc"));
const DuLich = lazy(() => import("../pages/DuLich/DuLich"));
const VeDaNang = lazy(() => import("../pages/VeNoiDia/VeDaNang"));
const VeDaLat = lazy(() => import("../pages/VeNoiDia/VeDatLat"));
const VeNhaTrang = lazy(() => import("../pages/VeNoiDia/VeNhaTrang"));
const VeQuyNhon = lazy(() => import("../pages/VeNoiDia/VeQuyNhon"));
const VeVinh = lazy(() => import("../pages/VeNoiDia/VeVinh"));
const VePhuQuoc = lazy(() => import("../pages/VeNoiDia/VePhuQuoc"));
const VeMi = lazy(() => import("../pages/VeQuocTe/VeMi"));
const VeUc = lazy(() => import("../pages/VeQuocTe/VeUc"));
const VeTheoHangAirlines = lazy(() => import("../pages/VeTheoHang/VeAirlines"));
const Vietjet = lazy(() => import("../pages/VeTheoHang/Vietjet"));
const VeTheoHangJetstar = lazy(() => import("../pages/VeTheoHang/Ve"));
const PhuQuoc = lazy(() => import("../pages/articles/PhuQuoc"));
const DaLat = lazy(() => import("../pages/articles/DaLat"));
const HaLong = lazy(() => import("../pages/articles/HaLong"));
const Hue = lazy(() => import("../pages/articles/Hue"));
const Sapa = lazy(() => import("../pages/articles/Sapa"));
const HoiAn = lazy(() => import("../pages/articles/HoiAn"));
const KyNiem10Nam = lazy(() => import("../pages/TinTuc/KyNiem10Nam"));
const KhaiTruongTPHCM = lazy(() => import("../pages/TinTuc/KhaiChuongHCM"));
const GiaiThuong2025 = lazy(() => import("../pages/TinTuc/KhaiChuongHCM"));
const SanPhamCongNghe = lazy(() => import("../pages/TinTuc/SP"));
const TeamBuilding2025 = lazy(() => import("../pages/TinTuc/TeamBuilding"));
const CSR2025 = lazy(() => import("../pages/TinTuc/CRS"));
// Lazy-loaded admin pages
// Lazy-loaded promotion pages (TinKhuyenMai)
const UuDaiHe2024 = lazy(() => import("../pages/TInKhuyenMai/Tin1"));
const DaNangBangkok = lazy(() => import("../pages/TInKhuyenMai/Tin2"));
const OrderCheckComponent = lazy(() => import("../pages/XemDon/XemDonHang"));
const FAQComponent = lazy(() => import("../pages/XemDon/CauHoi"));
const AdminDashboard = lazy(
  () => import("../pages/AdminDashboard/AdminDashboard"),
);
const UserManagement = lazy(() => import("../pages/User/User"));
const RequestManament = lazy(() => import("../pages/Request/Request"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <FullScreenLoading open={true} message="Đang tải dữ liệu..." />
        }
      >
        {" "}
        <Routes>
          {/* Client layout */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/tin-khuyen-mai" element={<TinKhuyenMai />} />
            <Route path="/xem-don-hang" element={<OrderCheckComponent />} />
            <Route path="/cau-hoi" element={<FAQComponent />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/ve-noi-dia" element={<VeNoiDia />} />
            <Route path="/ve-quoc-te" element={<VeQuocTe />} />
            <Route path="/ve-theo-hang" element={<VeTheoHang />} />
            <Route path="/tin-cong-ty" element={<TinCongTy />} />
            <Route path="/tin-tuc" element={<TinTuc />} />
            <Route path="/du-lich" element={<DuLich />} />
            <Route path="/ve-noi-dia/ve-di-ha-noi" element={<VeHaNoi />} />
            <Route
              path="/ve-noi-dia/ve-di-ho-chi-minh"
              element={<VeSaiGon />}
            />
            <Route path="/ve-noi-dia/ve-di-da-nang" element={<VeDaNang />} />
            <Route path="/ve-noi-dia/ve-di-hue" element={<VeSaiGon />} />
            <Route path="/ve-noi-dia/ve-di-da-lat" element={<VeDaLat />} />
            <Route
              path="/ve-noi-dia/ve-di-nha-trang"
              element={<VeNhaTrang />}
            />
            <Route path="/ve-noi-dia/ve-di-quy-nhon" element={<VeQuyNhon />} />
            <Route path="/ve-noi-dia/ve-di-vinh" element={<VeVinh />} />
            <Route path="/ve-noi-dia/ve-di-phu-quoc" element={<VePhuQuoc />} />
            <Route path="/ve-quoc-te/ve-di-mi" element={<VeMi />} />
            <Route path="/ve-quoc-te/ve-di-uc" element={<VeUc />} />
            <Route path="/ve-theo-hang/vna" element={<VeTheoHangAirlines />} />
            <Route path="/ve-theo-hang/vietjet" element={<Vietjet />} />
            <Route
              path="/ve-theo-hang/jetstar"
              element={<VeTheoHangJetstar />}
            />
            {/* Article routes */}
            <Route path="/kham-pha-bai-bien-phu-quoc" element={<PhuQuoc />} />
            <Route path="/hanh-trinh-kham-pha-da-lat" element={<DaLat />} />
            <Route path="/vinh-ha-long-di-san-the-gioi" element={<HaLong />} />
            <Route path="/trai-nghiem-van-hoa-hue" element={<Hue />} />
            <Route path="/kham-pha-sapa-vung-dat-suong-mu" element={<Sapa />} />
            <Route path="/hoi-an-pho-co-den-long" element={<HoiAn />} />
            <Route path="/ky-niem-10-nam-thanh-lap" element={<KyNiem10Nam />} />
            <Route
              path="/khai-truong-van-phong-moi-tphcm"
              element={<KhaiTruongTPHCM />}
            />
            <Route
              path="/giai-thuong-doanh-nghiep-xuat-sac-2025"
              element={<GiaiThuong2025 />}
            />
            <Route
              path="/ra-mat-san-pham-cong-nghe-moi"
              element={<SanPhamCongNghe />}
            />
            <Route
              path="/hoat-dong-team-building-2025"
              element={<TeamBuilding2025 />}
            />
            <Route
              path="/chuong-trinh-trach-nhiem-xa-hoi-2025"
              element={<CSR2025 />}
            />
            <Route
              path="/uu-dai-he-2024-dat-ve-may-bay-tang-ngay-chang-xe-vip"
              element={<UuDaiHe2024 />}
            />
            <Route
              path="/khai-truong-duong-bay-moi-da-nang-bangkok"
              element={<DaNangBangkok />}
            />
          </Route>

          {/* Admin layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="requests" element={<RequestManament />} />
          </Route>
          <Route path="/admin/hoan-tien" element={<LoginForm />} />
          <Route path="/admin/login" element={<LoginForm />} />

          {/* 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
