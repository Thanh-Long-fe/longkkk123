import React, { useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";

const FAQComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Sự kiện Tre em, Tre nhơ dưoc chương trình đưoc mơí lơn!",
      answer:
        "<p>Đây là <strong>sự kiện đặc biệt</strong> dành cho trẻ em và thanh thiếu niên. Chương trình bao gồm nhiều hoạt động thú vị như trò chơi, giao lưu văn hóa, và học hỏi kỹ năng sống.</p><ul><li>Thời gian: 8h - 16h</li><li>Địa điểm: Trung tâm Văn hóa TP.HCM</li></ul>",
    },
    {
      question:
        "Đieu gì xay ra nếu đien thoai không chuyền airplane mode khi bay?",
      answer:
        "<p>Việc không bật <em>airplane mode</em> có thể gây <strong>nhiễu tín hiệu</strong> trên máy bay, ảnh hưởng đến hệ thống liên lạc và an toàn bay. Hành khách nên tuân thủ quy định để đảm bảo an toàn chung.</p><p>Lưu ý: Phạt tiền có thể áp dụng nếu vi phạm.</p>",
    },
    {
      question: "Giá to xất trinh khi đi máy bay?",
      answer:
        "<p>Giá vé máy bay phụ thuộc vào <strong>hành trình</strong>, <em>hãng hàng không</em>, và thời điểm đặt vé. Ví dụ: Chuyến bay nội địa dao động từ 500.000 - 2.000.000 VNĐ.</p><ol><li>Kiểm tra giá trên website hãng.</li><li>Đặt sớm để có giá tốt.</li></ol>",
    },
    {
      question: "Quý đình vê hạn lý khi đi với Vietjet Air",
      answer:
        '<p>Vietjet Air có <strong>chính sách hành lý</strong> cụ thể: 7kg hành lý xách tay miễn phí, hành lý ký gửi từ 15kg trở lên tính phí thêm. Xem chi tiết tại <a href="https://www.vietjetair.com" target="_blank">website chính thức</a>.</p>',
    },
    {
      question: "Chinh sách hồ sơ voi hạn khach đên lam thu tuc tại sân bay.",
      answer:
        "<p>Chính sách này yêu cầu hành khách đến làm thủ tục tại sân bay trước 1 giờ với chuyến bay nội địa và 2 giờ với quốc tế. Hãy chuẩn bị <strong>hộ chiếu</strong> và vé điện tử.</p>",
    },
    {
      question: "Hanh khach co duoc mang theo nuoc lén máy bay không?",
      answer:
        "<p><strong>Không</strong>, hành khách không được mang nước lỏng lên máy bay theo quy định an ninh hàng không. Ngoại lệ: Nước dưới 100ml trong túi đựng trong suốt.</p>",
    },
    {
      question: "Nhung vat dung khong duoc mang theo trong han lý ký gi?",
      answer:
        "<p>Các vật dụng cấm bao gồm <strong>chất dễ cháy</strong>, chất lỏng nguy hiểm, và đồ vật sắc nhọn. Xem danh sách chi tiết tại quầy check-in.</p>",
    },
    {
      question:
        "51 quoc gia, vung lãnh thổ cong dân Viet Nam du lich không cần Visa",
      answer:
        '<p>Danh sách 51 quốc gia miễn visa cho công dân Việt Nam bao gồm Nhật Bản, Hàn Quốc, và một số nước châu Âu. Cập nhật mới nhất tại <a href="https://www.mofa.gov.vn" target="_blank">Bộ Ngoại giao</a>.</p>',
    },
    {
      question: "7 meo de co mot chuyen du lich suôn se.",
      answer:
        "<p><strong>7 mẹo quan trọng:</strong> <ol><li>Đặt vé sớm.</li><li>Kiểm tra giấy tờ tùy thân.</li><li>Chuẩn bị thuốc men cần thiết.</li><li>Kiểm tra thời tiết.</li><li>Mang theo bản đồ hoặc ứng dụng dẫn đường.</li><li>Lên kế hoạch chi tiêu.</li><li>Mua bảo hiểm du lịch.</li></ol></p>",
    },
    {
      question: "Ly do mo man cura so khi máy bay cat vao ha canh",
      answer:
        "<p>Mở màn cửa giúp <strong>quan sát</strong> và đảm bảo an toàn trong trường hợp khẩn cấp. Đồng thời, phi hành đoàn cần kiểm tra tình hình bên ngoài.</p>",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box className="container p-6 max-w-2xl">
      <Typography
        variant="h4"
        className="text-left mb-6 font-bold text-gray-800"
      >
        Câu hỏi thường gặp
      </Typography>
      {faqs.map((faq, index) => (
        <Box
          key={index}
          className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        >
          <Typography
            variant="h6"
            className="p-4 cursor-pointer hover:bg-gray-100 transition-colors text-gray-900"
            onClick={() => handleToggle(index)}
            sx={{ fontSize: "0.75rem", fontWeight: "bold" }}
            dangerouslySetInnerHTML={{ __html: faq.question }}
          />
          <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
            <Typography
              className="p-4 text-gray-600 bg-gray-50"
              sx={{ fontSize: "0.75rem" }}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default FAQComponent;
