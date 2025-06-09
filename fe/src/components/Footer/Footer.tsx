import React from "react";
import {
    FaFacebookF,
    FaGooglePlusG,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt
} from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[url(images/newBgFooter.jpg)] text-white text-sm pt-8 pb-4 px-4 md:px-8 bg-no-repeat bg-[#22376f]">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Cột 1 */}
                <div>
                    <h3 className="font-bold mb-2">Bạn còn thắc mắc?</h3>
                    <ul className="space-y-1">
                        <li>• Câu hỏi thường gặp</li>
                        <li>• Hướng dẫn thanh toán</li>
                        <li>• Liên hệ</li>
                        <li>• Thông tin chuyển khoản</li>
                        <li>• Hướng dẫn đặt vé</li>
                    </ul>
                </div>

                {/* Cột 2 */}
                <div>
                    <h3 className="font-bold mb-2">Về BAYRE247</h3>
                    <ul className="space-y-1">
                        <li>• Giới thiệu</li>
                        <li>• Tin khuyến mãi</li>
                    </ul>
                </div>

                {/* Cột 3 - Trung tâm hỗ trợ */}
                <div className="md:col-span-1 lg:col-span-1 bg-white text-black p-4 rounded shadow-md">
                    <h3 className="font-bold text-center mb-2">Trung tâm hỗ trợ</h3>
                    <div className="flex gap-3">
                        <div className="p-3 bg-[#DF4B38] flex justify-center items-center" style={{ borderRadius: "5px" }}> <FaPhoneAlt className="cursor-pointer text-white" /></div>
                        <div>
                        <p className="text-center font-bold text-red-600 text-lg">Toàn quốc</p>
                        <p className="text-center font-bold text-lg">02899963629</p>
                        </div>
                    </div>

                </div>

                {/* Cột 4 - Đăng ký email và social */}
                <div className="md:col-span-3 lg:col-span-1">
                    <h3 className="font-bold mb-2">Đăng ký Email nhận thông tin</h3>
                    <div className="flex mb-3">
                        <input
                            type="email"
                            placeholder="Nhập email của bạn..."
                            className="flex-grow px-2 py-1 rounded-l outline-none text-black"
                        />
                        <button className="bg-pink-500 text-white px-3 py-1 rounded-r">
                            Đăng ký
                        </button>
                    </div>
                    <div className="flex space-x-3 text-xl">
                        <div className="p-3 bg-[#44619D]" style={{ borderRadius: "5px" }}><FaFacebookF className="cursor-pointer hover:text-blue-500" /></div>
                        <div className="p-3 bg-[#DF4B38]" style={{ borderRadius: "5px" }}><FaGooglePlusG className="cursor-pointer hover:text-red-500" /></div>
                        <div className="p-3 bg-[#33CCFF]" style={{ borderRadius: "5px" }}> <FaTwitter className="cursor-pointer hover:text-sky-400" /></div>
                        <div className="p-3 bg-[#DF4B38]" style={{ borderRadius: "5px" }}> <FaYoutube className="cursor-pointer hover:text-red-600" /></div>
                    </div>
                </div>
            </div>

            {/* Thông tin các văn phòng */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-sm">
                {/* Miền Bắc */}
                <div>
                    <div className="font-bold text-yellow-300 flex items-center gap-2"> <div className="bg-white inline-block"><img src="images/logo6.png" alt="" className="h-[20px] w-[60px]" /></div>BAYRE247 TẠI MIỀN BẮC</div>
                    <p className="font-semibold">A/ Hà Nội</p>
                    <p>Số 11 Bình Minh, Phường Trâu Quỳ, Quận Gia Lâm, Tp. Hà Nội</p>
                    <p>Website: <a href="http://www.phongvemaybay360.com" className="text-pink-300 underline">www.phongvemaybay360.com</a></p>
                    <p>Email: phongvemaybay360.com@gmail.com</p>
                    <p>Tel: 0566338888</p>
                </div>

                {/* Miền Trung */}
                <div>
                    <div className="font-bold text-yellow-300 flex items-center gap-2"> <div className="bg-white inline-block"><img src="images/logo6.png" alt="" className="h-[20px] w-[60px]" /></div>BAYRE247 TẠI MIỀN TRUNG</div>
                    <p className="font-semibold">B/ Pleiku</p>
                    <p>38 Trường Chinh, Phường Phù Đổng, TP. Pleiku, Gia Lai</p>
                    <p>Website: <a href="http://www.phongvemaybay360.com" className="text-pink-300 underline">www.phongvemaybay360.com</a></p>
                    <p>Email: phongvemaybay360.com@gmail.com</p>
                    <p>Tel: 02899963629</p>
                </div>

                {/* Miền Nam */}
                <div>
                    <div className="font-bold text-yellow-300 flex items-center gap-2"> <div className="bg-white inline-block"><img src="images/logo6.png" alt="" className="h-[20px] w-[60px]" /></div>BAYRE247 TẠI MIỀN NAM</div>
                    <p className="font-semibold">C/ Hồ Chí Minh</p>
                    <p>247 Trần Phú, Phường 9, Quận 5, Tp. Hồ Chí Minh</p>
                    <p>Website: <a href="http://www.phongvemaybay360.com" className="text-pink-300 underline">www.phongvemaybay360.com</a></p>
                    <p>Email: phongvemaybay360.com@gmail.com</p>
                    <p>Tel: 02899963629</p>
                    <hr className="my-2 border-gray-500" />
                    <p className="font-semibold">D/ Bình Dương</p>
                    <p>Ngã 3 cây lơn, thị xã Dĩ An, tỉnh Bình Dương</p>
                    <p>Website: <a href="http://www.phongvemaybay360.com" className="text-pink-300 underline">www.phongvemaybay360.com</a></p>
                    <p>Email: phongvemaybay360.com@gmail.com</p>
                    <p>Tel: 0932 348 348</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-xs text-gray-300">
                © 2025 CÔNG TY CP ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN DỊCH VỤ T.H.D<br />
                MÃ SỐ THUẾ 0106978215
            </div>
        </footer>
    );
};

export default Footer;
