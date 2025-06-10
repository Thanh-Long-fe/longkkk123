import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Giới thiệu", path: "/gioi-thieu" },
    { label: "Vé nội địa", path: "/ve-noi-dia" },
    { label: "Vé quốc tế", path: "/ve-quoc-te" },
    { label: "Vé theo hãng", path: "/ve-theo-hang" },
    { label: "Hoàn tiền", path: "/hoan-tien" },
    { label: "Tin khuyến mại", path: "/tin-khuyen-mai" },
    { label: "Du Lịch", path: "/du-lich" },
    { label: "Tin tức", path: "/tin-tuc" },
    { label: "Tiện ích", path: "/tien-ich" },
    { label: "Liên hệ", path: "/lien-he" },
    { label: "Tin công ty", path: "/tin-cong-ty" },
  ];

  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="bg-white px-4 py-2 flex items-center justify-between">
        <div className="text-gray-700 text-sm">
          Mua vé máy bay giá rẻ trực tuyến hàng đầu Việt Nam Bayre247
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
          <span>👑</span>
          Tin tuyển dụng
        </button>
      </div>

      {/* Main header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between border-b">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="images/logo6.png"
            alt="logo"
            style={{ maxHeight: "80px" }}
          />
        </div>

        {/* Phone number */}
        <div className="flex items-center text-red-600 font-bold text-xl">
          <img
            src="images/icon_phone.png"
            alt="phone icon"
            style={{ width: "30px", height: "30px" }}
          />
          02899963629
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="bg-[#130A7F]" style={{ borderRadius: "5px" }}>
        <div className="flex items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`p-[5px] font-bold px-4 text-white hover:bg-white hover:text-[#130A7F] ${index < menuItems.length - 1 ? "border-r border-blue-700" : ""}`}
            >
              <span style={{ fontSize: "0.75rem" }}>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
