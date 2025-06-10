import React from "react";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  title,
  description,
  date,
  link,
}) => {
  const nav = useNavigate();
  return (
    <div className="flex items-start gap-4 border-b pb-4 mb-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-[90px] h-[90px] object-cover rounded-md flex-shrink-0 my-4"
      />
      <div className="flex-1">
        <h3
          className="text-[#1E0D90] font-semibold text-lg leading-snug hover:underline cursor-pointer"
          onClick={() => nav(link)}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <p className="text-right text-xs text-gray-500 mt-2">{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
