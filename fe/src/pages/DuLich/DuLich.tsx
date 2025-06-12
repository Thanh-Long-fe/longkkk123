import NewsCard from "../../components/cardnew/Card";
import { Link } from "react-router-dom";

const DuLich = () => {
  return (
    <div>
      <div className="breadcrumb breadcrumbs">
        <div className="rdfa-breadcrumb">
          <div>
            <Link to="/">Trang chủ</Link>
            &nbsp;<span className="separator">»</span>&nbsp;Du lịch
          </div>
        </div>
      </div>
      <h2 className="font-bold" style={{ color: "#130A7F", marginTop: "10px" }}>
        Du lịch
      </h2>
      <div className="w-full bg-[#c8c8c8] h-[1px]"></div>
      <NewsCard
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        date="12-06-2025"
        title="Khám phá bãi biển Phú Quốc tuyệt đẹp"
        description="Vào mùa hè 2025, Phú Quốc tiếp tục là điểm đến hấp dẫn với những bãi biển cát trắng và nước trong xanh. Đặt tour ngay để trải nghiệm thiên đường nghỉ dưỡng này..."
        link="/kham-pha-bai-bien-phu-quoc"
      />
      <NewsCard
        imageUrl="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
        date="10-06-2025"
        title="Hành trình khám phá cao nguyên Đà Lạt"
        description="Đà Lạt mùa này rực rỡ với hoa cẩm tú cầu và không khí se lạnh. Tham gia tour du lịch Đà Lạt để tận hưởng cảnh sắc thơ mộng và ẩm thực đặc trưng..."
        link="/hanh-trinh-kham-pha-da-lat"
      />
      <NewsCard
        imageUrl="https://images.unsplash.com/photo-1518548419970-7c00a7cd96e1"
        date="05-06-2025"
        title="Vịnh Hạ Long – Di sản thiên nhiên thế giới"
        description="Vịnh Hạ Long chào đón du khách với cảnh quan núi đá vôi hùng vĩ và các hoạt động chèo thuyền kayak. Đặt vé ngay để khám phá kỳ quan này vào tháng 6/2025..."
        link="/vinh-ha-long-di-san-the-gioi"
      />
      <NewsCard
        imageUrl="https://images.unsplash.com/photo-1530789253388-582c481c54b0"
        date="01-06-2025"
        title="Trải nghiệm văn hóa Huế mộng mơ"
        description="Huế thu hút du khách bởi các di tích lịch sử và ẩm thực cung đình. Tham gia tour du lịch Huế để khám phá Kinh thành và sông Hương thơ mộng..."
        link="/trai-nghiem-van-hoa-hue"
      />
      <NewsCard
        imageUrl="https://images.unsplash.com/photo-1555400082-9f7862c60239"
        date="28-05-2025"
        title="Khám phá Sapa – Vùng đất sương mù"
        description="Sapa mùa hè 2025 là điểm đến lý tưởng với khí hậu mát mẻ và cảnh sắc núi non hùng vĩ. Đừng bỏ lỡ cơ hội khám phá văn hóa bản địa và chợ đêm Sapa..."
        link="/kham-pha-sapa-vung-dat-suong-mu"
      />
      <NewsCard
        imageUrl="https://images.unsplash.com/photo-1504457047772-27faf1c00561"
        date="20-05-2025"
        title="Hội An – Phố cổ đèn lồng lung linh"
        description="Hội An chào đón du khách với những con phố cổ kính và ánh đèn lồng rực rỡ về đêm. Đặt tour để trải nghiệm văn hóa và ẩm thực độc đáo của phố cổ này..."
        link="/hoi-an-pho-co-den-long"
      />
    </div>
  );
};

export default DuLich;
