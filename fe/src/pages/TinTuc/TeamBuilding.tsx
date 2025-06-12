import { Link } from "react-router-dom";
import news from "../../baiviet/TinTuc.json";

const TeamBuilding2025 = () => {
  const article: any = news.find(
    (item) => item.link === "/hoat-dong-team-building-2025",
  );

  return (
    <div className="p-4">
      <div className="breadcrumb breadcrumbs">
        <div className="rdfa-breadcrumb">
          <div>
            <Link to="/">Trang chủ</Link>
            <span className="separator">»</span>
            <Link to="/tin-tuc">Tin Tức</Link>
            <span className="separator">»</span> {article.title}
          </div>
        </div>
      </div>
      <h2 className="font-bold" style={{ color: "#130A7F", marginTop: "10px" }}>
        {article.title}
      </h2>
      <p className="text-sm text-gray-600">{article.date}</p>
      <article className="mt-4">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <p className="mt-4">
          <strong>
            Vemaybaygiare247.com – Đại lý cung cấp vé máy bay giá rẻ Nội Địa và
            Quốc Tế
          </strong>
        </p>
        <p>
          Với tiêu chí đem lại sự hài lòng nhất về dịch vụ cho mọi khách hàng.
          Luôn tạo lòng tin và luôn là người bạn đồng hành cùng các quý khách
          hàng.
        </p>
        <p>
          Với giao diện đặt vé thân thiện – dễ dàng – thông minh, chúng tôi luôn
          cố gắng mang đến cho quý khách hàng những gì tốt nhất.
        </p>
        <p>
          Truy cập Website:{" "}
          <a href="https://phongvemaybay360.com" className="text-blue-600">
            www.phongvemaybay360.com
          </a>{" "}
          để được tư vấn và đặt vé trực tuyến dễ dàng và nhanh nhất.
        </p>
        <p>
          Liên hệ Hotline:{" "}
          <strong>Miền Bắc: 0932.348.348 hoặc 0971.168.123</strong>
        </p>
        <p>
          <strong>Miền Trung và Miền Nam: 088.828.7272</strong>
        </p>
        <p>
          <strong>Tổng đài: (+84-4).38.36.39.39</strong>
        </p>
        <p>
          Khi bạn có nhu cầu đặt vé hay có bất kỳ thắc mắc nào liên quan đến
          hành trình hãy liên hệ ngay với chúng tôi để được tư vấn và hỗ trợ
          nhanh nhất.
        </p>
        <p>
          <strong>BAY.VN</strong> chúc các bạn có cho mình những chuyến đi hoàn
          hảo trong mùa hè năm nay!
        </p>
      </article>
    </div>
  );
};

export default TeamBuilding2025;
