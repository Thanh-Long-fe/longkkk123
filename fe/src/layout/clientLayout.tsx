// src/layouts/ClientLayout.tsx
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import FlightLinks from "../components/FlightLinks/FlightLinks";
import Footer from "../components/Footer/Footer";

export default function ClientLayout() {
  return (
    <div>
      <div
        className="fixed lg:block hidden"
        style={{ left: "10px", top: "5px" }}
      >
        <Link to={"/"}>
          <img src="images/customer.png" alt="" />
        </Link>
      </div>
      <div
        className="fixed lg:block hidden"
        style={{ right: "10px", top: "5px" }}
      >
        <Link to={"/"}>
          <img src="images/customer.png" alt="" />
        </Link>
      </div>
      <div
        className="xl:mx-[15%] min-h-[100vh] px-4 lg:mx-[10%] md:mx-[0px]"
        style={{ background: "#ffffff" }}
      >
        <Header />
        <div className="flex justify-center items-center gap-2 py-2">
          <img
            src="https://phongvemaybay360.com/wp-content/themes/abay/images/gif-1.gif"
            alt=""
          />
          <p>
            {" "}
            Bạn có thể kiểm tra giá vé và đặt vé nhanh thông qua HOTLINE
            1900.27.27.67{" "}
          </p>
          <img
            src="https://phongvemaybay360.com/wp-content/themes/abay/images/gif-1.gif"
            alt=""
          />
        </div>
        <main>
          <Outlet />
        </main>
        <div>
          <FlightLinks />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
