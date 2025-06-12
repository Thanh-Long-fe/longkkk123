import NewsCard from "../../components/cardnew/Card"; // Adjusted path
import { Link } from "react-router-dom";
import promotions from "../../baiviet/TinKhuyenMai.json"; // Adjust path as needed

const TinKhuyenMai = () => {
  return (
    <div className="p-4">
      <div className="breadcrumb breadcrumbs">
        <div className="rdfa-breadcrumb">
          <div>
            <Link to="/">Trang chủ</Link>
            <span className="separator">»</span> Tin Khuyến Mại
          </div>
        </div>
      </div>
      <h2 className="font-bold" style={{ color: "#130A7F", marginTop: "10px" }}>
        Tin khuyến mại
      </h2>
      <div className="w-full bg-[#c8c8c8] h-[1px] my-2"></div>
      {promotions.map((article) => (
        <NewsCard
          key={article.id}
          imageUrl={article.imageUrl}
          date={article.date}
          title={article.title}
          description={article.description}
          link={article.link}
        />
      ))}
    </div>
  );
};

export default TinKhuyenMai;
