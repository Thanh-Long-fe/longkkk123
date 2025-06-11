import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Giới thiệu", path: "/gioi-thieu" },
    {
      label: "Vé nội địa",
      path: "/ve-noi-dia",
      subMenu: [
        { label: "Hồ Chí Minh", path: "/ve-noi-dia/hcm" },
        { label: "Hà Nội", path: "/ve-noi-dia/hn" },
      ],
    },
    {
      label: "Vé quốc tế",
      path: "/ve-quoc-te",
      subMenu: [
        { label: "Singapore", path: "/ve-quoc-te/singapore" },
        { label: "Thái Lan", path: "/ve-quoc-te/thailand" },
      ],
    },
    {
      label: "Vé theo hãng",
      path: "/ve-theo-hang",
      subMenu: [
        { label: "Vietnam Airlines", path: "/ve-theo-hang/vna" },
        { label: "VietJet", path: "/ve-theo-hang/vietjet" },
      ],
    },
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
        <div className="text-gray-700 text-sm hidden sm:block">
          Mua vé máy bay giá rẻ trực tuyến hàng đầu Việt Nam Bayre247
        </div>
        <div className="text-gray-700 text-xs sm:hidden">
          Bayre247 - Vé máy bay giá rẻ
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
          <span>👑</span>
          <span className="hidden sm:inline">Tin tuyển dụng</span>
          <span className="sm:hidden">Tuyển dụng</span>
        </button>
      </div>

      {/* Main header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between border-b">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="images/logo6.png"
            alt="logo"
            className="max-h-12 sm:max-h-16 lg:max-h-20"
          />
        </div>

        {/* Phone number */}
        <div className="flex items-center text-red-600 font-bold text-sm sm:text-xl">
          <img
            src="images/icon_phone.png"
            alt="phone icon"
            className="w-5 h-5 sm:w-7 sm:h-7 mr-1 sm:mr-2"
          />
          <span className="hidden sm:inline">02899963629</span>
          <span className="sm:hidden">0289996...</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden bg-[#130A7F] text-white p-2 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation menu - Desktop */}
      <nav className="bg-[#130A7F] hidden lg:block" style={{ borderRadius: "5px" }}>
        <div className="flex items-center relative">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.subMenu && setActiveSubmenu(index)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={item.path}
                className={`block p-[5px] font-bold px-3 text-white hover:bg-white hover:text-[#130A7F] ${
                  index < menuItems.length - 1 ? "border-r border-blue-700" : ""
                }`}
              >
                <span className="text-xs flex items-center">
                  {item.label}
                  {item.subMenu && (
                    <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </Link>

              {/* Submenu */}
              {item.subMenu && activeSubmenu === index && (
                <div className=" absolute top-full left-0 shadow-lg rounded-md py-1 min-w-[180px] z-50 hover:bg-white hover:text-[#130A7F]">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 bg-[#130A7F] py-2 text-sm text-white font-bold hover:bg-white hover:text-[#130A7F]"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Navigation menu - Mobile */}
      {mobileMenuOpen && (
        <nav className="bg-[#130A7F] lg:hidden" style={{ borderRadius: "5px" }}>
          <div className="py-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className="flex-1 block p-3 font-bold text-white hover:bg-white hover:text-[#130A7F] text-sm"
                    onClick={() => !item.subMenu && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subMenu && (
                    <button
                      className="p-3 text-white"
                      onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                    >
                      <svg 
                        className={`w-4 h-4 transform transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                {item.subMenu && activeSubmenu === index && (
                  <div className="bg-white bg-opacity-10">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block pl-8 pr-4 py-2 text-sm text-white hover:bg-white hover:text-[#130A7F]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;