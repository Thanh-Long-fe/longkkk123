import React from 'react';
import {Box} from "@mui/material"
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  const menuItems = [
    'Home',
    'Giới thiệu',
    'Vé nội địa',
    'Vé quốc tế',
    'Vé theo hãng',
    'Hoàn tiền',
    'Tin khuyến mại',
    'Du Lịch',
    'Tin tức',
    'Tiện ích',
    'Liên hệ',
    'Tin công ty'
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
          <div>
           <img src="images/logo6.png" alt="" style={{ maxHeight : "80px"}}/>
          </div>
        </div>

        {/* Phone number */}
        <div className="flex items-center text-red-600 font-bold text-xl">
         <img src="images/icon_phone.png" alt="" style={{ width: "30px", height: "30px"}}/>
          02899963629
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="bg-[#130A7F]" style={{ borderRadius: "5px"}}>
        <div className="flex items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to="#"
              className={`p-[5px] font-bold  px-4 text-white hover:bg-white hover:text-[#130A7F] ${index < menuItems.length - 1 ? 'border-r border-blue-700' : ''}`}
            >
              <span style={{
                fontSize: "0.75rem"
              }}>{item}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;