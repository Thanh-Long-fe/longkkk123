import React from "react";

const FlightLinks: React.FC = () => {
  const domesticFlights = [
    "Hà Nội", "Sài Gòn", "Đà Nẵng", "Nha Trang", "Huế", "Đà Lạt", "Phú Quốc",
    "Vinh", "Cần Thơ", "Hải Phòng", "Buôn Mê Thuột", "Quy Nhơn", "Côn Đảo", "Cà Mau",
    "Điện Biên", "Khánh Hòa", "Kiên Giang", "Tam Kỳ-Chu Lai", "Nghệ An", "Tuy Hòa",
    "Pleiku", "Thanh Hóa", "Đồng Hới", "Rạch Giá"
  ];

  const internationalFlights = [
    "Mỹ", "Úc", "Singapore", "Thái Lan", "Nhật Bản", "Hàn Quốc", "Đức", "Anh", "Pháp",
    "Trung Quốc", "Ấn Độ", "Ba Lan", "Campuchia", "Canada", "Đài Loan", "Hà Lan", "Hồng Kông",
    "Tây Ban Nha", "New Zealand", "Myanmar", "Italia"
  ];

  const airlineFlights = [
    "Jetstar", "Vietjet Air", "Vietnam Airline", "Singapore Airlines", "EVA Air",
    "Thai Airways", "Tiger Airwayss", "Air Asia", "Asiana Airlines"
  ];

  const flightTypes = [
    "Tết 2024", "giá rẻ", "khuyến mãi", "đi du học"
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        {/* Vé máy bay nội địa */}
        <div>
          <h3 className="font-bold text-blue-900 mb-2">Vé máy bay nội địa</h3>
          <ul className="space-y-1">
            {domesticFlights.map((place, index) => (
              <li key={index} className="text-gray-700 hover:underline cursor-pointer">
                • Vé máy bay đi {place}
              </li>
            ))}
          </ul>
        </div>

        {/* Vé máy bay Quốc tế */}
        <div>
          <h3 className="font-bold text-blue-900 mb-2">Vé máy bay Quốc tế</h3>
          <ul className="space-y-1">
            {internationalFlights.map((place, index) => (
              <li key={index} className="text-gray-700 hover:underline cursor-pointer">
                • Vé máy bay đi {place}
              </li>
            ))}
          </ul>
        </div>

        {/* Vé máy bay theo hãng */}
        <div>
          <h3 className="font-bold text-blue-900 mb-2">Vé máy bay theo hãng</h3>
          <ul className="space-y-1">
            {airlineFlights.map((brand, index) => (
              <li key={index} className="text-gray-700 hover:underline cursor-pointer">
                • Vé máy bay {brand}
              </li>
            ))}
          </ul>
        </div>

        {/* Vé máy bay theo loại */}
        <div>
          <h3 className="font-bold text-blue-900 mb-2">Vé máy bay theo loại</h3>
          <ul className="space-y-1">
            {flightTypes.map((type, index) => (
              <li key={index} className="text-gray-700 hover:underline cursor-pointer">
                • Vé máy bay {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlightLinks;
