import React from "react";
import NewsCard from "../cardnew/Card";

const Tin = () => {
  return (
    <div>
      <h2 className="font-bold" style={{ color: "#130A7F", marginTop: "10px" }}>
        Tin khuyến mại
      </h2>
      <div className="w-full bg-[#c8c8c8] h-[1px]"></div>
      <NewsCard
        imageUrl="https://phongvemaybay360.com/wp-content/uploads/bfi_thumb/km-chao-he-vna-qxac39ykanyqcnpsp692zj8pv93z87hti6u0dcvysc.png"
        date="28-06-2024"
        title="ƯU ĐÃI HÈ 2024 “ĐẶT VÉ MÁY BAY TẶNG NGAY CHẶNG XE VIP"
        description="Để chào đón Hè 2024 Vemaybaygiare247.com có chương trình ưu đãi dành cho quý khách hàng Chương trình được áp dụng dành cho khách đoàn từ 4 người hoặc 6 người book vé ..."
        link="/uu-dai-he-2024-dat-ve-may-bay-tang-ngay-chang-xe-vip"
      />
      <NewsCard
        imageUrl="https://phongvemaybay360.com/wp-content/uploads/bfi_thumb/Duong-bay-DAD-BKK-landing-qxac85qdsoncnqmh6s8bfsvwyb1m7lvmictt43ncgs.png"
        date="28-06-2024"
        title="Khai trương đường bay mới Đà Nẵng – Bangkok, Vietnam Airlines bán muôn vàn vé rẻ"
        description="Ngày 26/06/2024 vừa qua, hãng hàng không Vietnam Airlines đã chính thức khai trương đường bay quốc tế mới Đà Nẵng – Bangkok (Thái Lan). Nhân dịp mở đường bay ..."
        link="/uu-dai-he-2024-dat-ve-may-bay-tang-ngay-chang-xe-vip"
      />
      <NewsCard
        imageUrl="https://phongvemaybay360.com/wp-content/uploads/bfi_thumb/km-chao-he-vna-qxac39ykanyqcnpsp692zj8pv93z87hti6u0dcvysc.png"
        date="28-06-2024"
        title="ƯU ĐÃI HÈ 2024 “ĐẶT VÉ MÁY BAY TẶNG NGAY CHẶNG XE VIP"
        description="Để chào đón Hè 2024 Vemaybaygiare247.com có chương trình ưu đãi dành cho quý khách hàng Chương trình được áp dụng dành cho khách đoàn từ 4 người hoặc 6 người book vé ..."
        link="khai-truong-duong-bay-moi-da-nang-bangkok-vietnam-airlines-ban-muon-van-ve-re/"
      />
    </div>
  );
};

export default Tin;
