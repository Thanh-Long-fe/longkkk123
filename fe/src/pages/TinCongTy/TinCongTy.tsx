import React from "react";
import NewsCard from "../../components/cardnew/Card";

const TinCongTy = () => {
  return (
    <div>
      <h2 className="font-bold" style={{ color: "#130A7F", marginTop: "10px" }}>
        Tin công ty
      </h2>
      <div className="w-full bg-[#c8c8c8] h-[1px]"></div>
      <NewsCard
        imageUrl="https://via.placeholder.com/300x150?text=Company+Event"
        date="12-06-2025"
        title="Lễ kỷ niệm 10 năm thành lập công ty"
        description="Vào ngày 10/06/2025, công ty chúng tôi đã tổ chức lễ kỷ niệm 10 năm thành lập với sự tham gia của toàn thể nhân viên và đối tác. Sự kiện đánh dấu cột mốc quan trọng trong hành trình phát triển..."
        link="/ky-niem-10-nam-thanh-lap"
      />
      <NewsCard
        imageUrl="https://via.placeholder.com/300x150?text=New+Office+Opening"
        date="10-06-2025"
        title="Khai trương văn phòng mới tại TP.HCM"
        description="Công ty tự hào thông báo khai trương văn phòng mới tại TP.HCM vào ngày 08/06/2025. Văn phòng hiện đại này sẽ hỗ trợ mở rộng hoạt động kinh doanh và phục vụ khách hàng tốt hơn..."
        link="/khai-truong-van-phong-moi-tphcm"
      />
      <NewsCard
        imageUrl="https://via.placeholder.com/300x150?text=Award+Ceremony"
        date="05-06-2025"
        title="Công ty nhận giải thưởng Doanh nghiệp xuất sắc 2025"
        description="Chúng tôi vinh dự nhận giải thưởng 'Doanh nghiệp xuất sắc 2025' tại lễ trao giải diễn ra ngày 03/06/2025. Giải thưởng ghi nhận những nỗ lực đổi mới và cống hiến của đội ngũ..."
        link="/giai-thuong-doanh-nghiep-xuat-sac-2025"
      />
      <NewsCard
        imageUrl="https://via.placeholder.com/300x150?text=New+Product+Launch"
        date="01-06-2025"
        title="Ra mắt sản phẩm công nghệ mới"
        description="Công ty vừa ra mắt sản phẩm công nghệ tiên tiến vào ngày 30/05/2025, hứa hẹn mang đến trải nghiệm vượt trội cho khách hàng. Sản phẩm đã nhận được nhiều phản hồi tích cực..."
        link="/ra-mat-san-pham-cong-nghe-moi"
      />
      <NewsCard
        imageUrl="https://via.placeholder.com/300x150?text=Team+Building"
        date="28-05-2025"
        title="Hoạt động team building gắn kết đội ngũ"
        description="Ngày 25/05/2025, công ty tổ chức chương trình team building tại Đà Lạt, giúp tăng cường sự gắn kết và tinh thần làm việc nhóm giữa các nhân viên..."
        link="/hoat-dong-team-building-2025"
      />
      <NewsCard
        imageUrl="https://via.placeholder.com/300x150?text=CSR+Event"
        date="20-05-2025"
        title="Chương trình trách nhiệm xã hội tại địa phương"
        description="Công ty đã tổ chức hoạt động CSR vào ngày 18/05/2025, hỗ trợ cộng đồng địa phương thông qua các chương trình giáo dục và môi trường..."
        link="/chuong-trinh-trach-nhiem-xa-hoi-2025"
      />
    </div>
  );
};

export default TinCongTy;