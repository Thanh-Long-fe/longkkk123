import NewsCard from "../../components/cardnew/Card";
import { Link } from "react-router-dom";
import news from "../../baiviet/TinTuc.json";

const TinTuc = () => {
  return (
    <div className="p-4">
      <div className="breadcrumb breadcrumbs">
        <div className="rdfa-breadcrumb">
          <div>
            <Link to="/">Trang chủ</Link>
            <span className="separator">»</span> Tin Tức
          </div>
        </div>
      </div>
      <h2 className="font-bold" style={{ color: "#130A7F", marginTop: "10px" }}>
        Tin tức
      </h2>
      <div className="w-full bg-[#c8c8c8] h-[1px] my-2"></div>
      {news.map((article) => (
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

export default TinTuc;
