import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

export default function Home() {
  return <>
    <div className="flex justify-center items-center gap-2 py-2">
      <img src="https://phongvemaybay360.com/wp-content/themes/abay/images/gif-1.gif" alt="" />
      <p> Bạn có thể kiểm tra giá vé và đặt vé nhanh thông qua HOTLINE 02899963629 </p>
      <img src="https://phongvemaybay360.com/wp-content/themes/abay/images/gif-1.gif" alt="" />
    </div>
    <div className="flex gap-5">
      <div className="basis-1/2">
        <img src="images/112.png" alt="" />
      </div>
      <div className="basis-1/2 flex flex-col">
        <div className="basis-1/2">
          <img src="images/230.gif" alt="" className="w-full h-[220px]" />
        </div>
        <div className="basis-1/2">
          {/* list */}
          <p className="font-bold" style={{ fontSize: "1.25rem", color: "#130A7F" }}>Vé máy bay khách đặt mới nhất</p>
          <div className="flex gap-4">
            <div>
              <span style={{ fontSize: "0.75rem" }}>Khách đặt 1 vé máy bay <span className="font-bold">Hà Nội - De Gaulle, Paris, ngày 24/07/2025</span>
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="images/14-mt4bi81sgrwnu0iaqlzrqixbwpyvba64d5f8hcq818.png" alt="" />
            <div>
              <span className="flex gap-2 items-center" style={{ fontSize: "0.75rem" }}> <img src="https://phongvemaybay360.com/wp-content/themes/abay/images/refresh.gif" alt="" />1 phút trước  <span className="font-bold text-red-600">Giá 7,788,000 đồng/vé</span>
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <span style={{ fontSize: "0.75rem" }}>Khách đặt 1 vé máy bay <span className="font-bold">Hà Nội - De Gaulle, Paris, ngày 24/07/2025</span>
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="images/14-mt4bi81sgrwnu0iaqlzrqixbwpyvba64d5f8hcq818.png" alt="" />
            <div>
              <span className="flex gap-2 items-center" style={{ fontSize: "0.75rem" }}> <img src="https://phongvemaybay360.com/wp-content/themes/abay/images/refresh.gif" alt="" />1 phút trước  <span className="font-bold text-red-600">Giá 7,788,000 đồng/vé</span>
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <span style={{ fontSize: "0.75rem" }}>Khách đặt 1 vé máy bay <span className="font-bold">Hà Nội - De Gaulle, Paris, ngày 24/07/2025</span>
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="images/14-mt4bi81sgrwnu0iaqlzrqixbwpyvba64d5f8hcq818.png" alt="" />
            <div>
              <span className="flex gap-2 items-center" style={{ fontSize: "0.75rem" }}> <img src="https://phongvemaybay360.com/wp-content/themes/abay/images/refresh.gif" alt="" />1 phút trước  <span className="font-bold text-red-600">Giá 7,788,000 đồng/vé</span>
              </span>
            </div>
          </div>
        </div>
        {/* end list */}
      </div>
    </div>
    <div style={{ border: "solid 1px #c8c8c8", borderRadius: "10px" }} className="flex my-4 p-2 gap-8">
      <div className="basis-1/2">
        <h4 style={{ fontSize: "1.5rem", color: "#130A7F" }} className="font-bold">
          Quý khách có thể
          mua vé máy bay bằng các hình thức
        </h4>
        <div>
          <span style={{ fontSize: "0.75rem", color: "#373a3c" }}> <span style={{ fontSize: "2.5rem", color: "#373a3c" }}>1</span>.Trực tiếp lên website, nhanh nhất - tiện nhất</span>
        </div>
        <div>
          <span style={{ fontSize: "0.75rem", color: "#373a3c" }}> <span style={{ fontSize: "2.5rem", color: "#373a3c" }}>2</span>.Qua chat</span>
          <div className="ps-4">
            <>
              <div
                style={{
                  textAlign: "left",
                  color: "rgb(55, 58, 60)",
                  backgroundColor: "rgb(255, 255, 255)",
                  fontSize: 12,
                }}
              >
                <strong>Skype:</strong>
              </div>
              <p>
                <span
                  style={{
                    textAlign: "left",
                    color: "rgb(55, 58, 60)",
                    backgroundColor: "rgb(255, 255, 255)",
                    fontSize: 12,
                  }}
                >
                  Book vé quốc tế:Mr.T
                </span>
              </p>
              <p>
                <span
                  style={{
                    textAlign: "left",
                    color: "rgb(55, 58, 60)",
                    backgroundColor: "rgb(255, 255, 255)",
                    fontSize: 12,
                  }}
                >
                  Book vé nội địa: Ms.L
                </span>

              </p>
              <div
                style={{
                  textAlign: "left",
                  color: "rgb(55, 58, 60)",
                  backgroundColor: "rgb(255, 255, 255)",
                  fontSize: 12,
                }}
              >
                <strong>Zalo:</strong>
              </div>
              <p>
                <span
                  style={{
                    textAlign: "left",
                    color: "rgb(55, 58, 60)",
                    backgroundColor: "rgb(255, 255, 255)",
                    fontSize: 12,
                  }}
                >
                  Book vé quốc tế:  Mr.T
                </span>

              </p>
              <p>
                <span
                  style={{
                    textAlign: "left",
                    color: "rgb(55, 58, 60)",
                    backgroundColor: "rgb(255, 255, 255)",
                    fontSize: 12,
                  }}
                >
                  Book vé nội địa: Mr.T
                </span>
              </p>
            </>

          </div>
        </div>
        <div>
          <span style={{ fontSize: "0.75rem", color: "#373a3c" }}> <span style={{ fontSize: "2.5rem", color: "#373a3c" }}>3</span>.Gọi điện thoại cho BAYRE247 </span>
          <div style={{ fontSize: "0.75rem", color: "#373a3c" }}>Phone: <span className="text-blue-600">02899963629</span></div>
          <div style={{ fontSize: "0.75rem", color: "#373a3c" }}>Mobile: <span className="text-blue-600">02899963629</span></div>
        </div>
        <div>
          <div>
            <span style={{ fontSize: "0.75rem", color: "#373a3c" }}> <span style={{ fontSize: "2.5rem", color: "#373a3c" }}>4</span>.Đến trực tiếp văn phòng Vebayre247 tại Hà Nội và <Link className="text-blue-600" to={"/lien-he"}>các tỉnh thành khác</Link></span>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14925.669039569635!2d105.7694039!3d20.7338753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313435575e36e7ab%3A0xe61b6050ae23a69b!2zxJAuIFF1YW5nIFRydW5nLCB0dC4gVsOibiDEkMOsbmgsIOG7qG5nIEjDsmEsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1749463423100!5m2!1sen!2s" width="448" height="150" style={{ border: 0 }} allowFullScreen={false} loading="lazy" >
          </iframe>
        </div>
      </div>
      <div className="basis-1/2">
        <h4 style={{ fontSize: "1.5rem", color: "#130A7F" }} className="font-bold">
          Các hình thức thanh toán
        </h4>
        <div className="flex gap-1 mb-4 py-2" style={{ borderBottom: "1px solid #f3f5f5" }}>
          <div> <img src="images/logoTHD.png" alt="" style={{
            width: "55px",
            height: "auto"
          }} /></div>
          <div>
            <div style={{ fontSize: "0.75rem" }} className="uppercase font-bold">Thanh toán bằng tiền mặt tại Văn phòng Vebayre247</div>
            <div style={{ fontSize: "0.75rem", color: "#373a3c" }} className="">Sau khi đặt hàng thành công, Quý khách vui lòng qua văn phòng Vebayre247 để thanh toán và nhận vé.</div>
          </div>
        </div>
        <div className="flex gap-1 mb-4 py-2" style={{ borderBottom: "1px solid #f3f5f5" }}>
          <div> <img src="images/logoTHD.png" alt="" style={{
            width: "55px",
            height: "auto"
          }} /></div>
          <div>
            <div style={{ fontSize: "0.75rem" }} className="uppercase font-bold">Thanh toán bằng tiền mặt tại Văn phòng Vebayre247</div>
            <div style={{ fontSize: "0.75rem", color: "#373a3c" }} className="">Sau khi đặt hàng thành công, Quý khách vui lòng qua văn phòng Vebayre247 để thanh toán và nhận vé.</div>
          </div>
        </div>
        <div className="flex gap-1 mb-4 py-2" style={{ borderBottom: "1px solid #f3f5f5" }}>
          <div> <img src="images/logoTHD.png" alt="" style={{
            width: "55px",
            height: "auto"
          }} /></div>
          <div>
            <div style={{ fontSize: "0.75rem" }} className="uppercase font-bold">Thanh toán bằng tiền mặt tại Văn phòng Vebayre247</div>
            <div style={{ fontSize: "0.75rem", color: "#373a3c" }} className="">Sau khi đặt hàng thành công, Quý khách vui lòng qua văn phòng Vebayre247 để thanh toán và nhận vé.</div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center"><img src="images/PartnerV2.jpg" alt="" /></div>
      </div>
    </div>
    <div className="flex gap-5">
      <div style={{ border: "solid 1px #c8c8c8", borderRadius: "10px", padding: "10px" }} className="basis-1/2">
        <div style={{ fontSize: "1.5rem", color: "#130A7F", borderBottom: "1px solid  #c8c8c8" }} className="font-bold pb-5 pt-3">Khách hàng nói về chúng tôi</div>
        <div className="flex gap-2 px-2 py-5" style={{ borderBottom: "1px solid  #c8c8c8"}}>
          <img src="images/messages-icon.png" alt="" />
          <div>
            <div style={{ fontStyle: "italic", fontSize: "0.75rem"}}>Quá uy tín các bạn ạ</div>
            <div style={{ fontSize: "0.75rem", fontStyle: "italic"}}>A HÙNG0962159895</div>
          </div>
        </div>
        <div className="flex gap-2 px-2 py-5" style={{ borderBottom: "1px solid  #c8c8c8"}}>
          <img src="images/messages-icon.png" alt="" />
          <div>
            <div style={{ fontStyle: "italic", fontSize: "0.75rem"}}>Quá uy tín các bạn ạ</div>
            <div style={{ fontSize: "0.75rem", fontStyle: "italic"}}>A HÙNG0962159895</div>
          </div>
        </div>
        <div className="flex gap-2 px-2 py-5" style={{ borderBottom: "1px solid  #c8c8c8"}}>
          <img src="images/messages-icon.png" alt="" />
          <div>
            <div style={{ fontStyle: "italic", fontSize: "0.75rem"}}>Quá uy tín các bạn ạ</div>
            <div style={{ fontSize: "0.75rem", fontStyle: "italic"}}>A HÙNG0962159895</div>
          </div>
        </div>
        <div className="flex justify-end pt-6 pb-2">
          <Button/>
        </div>
      </div>
      <div className="basis-1/2 bg-no-repeat p-[10px]" style={{
        background: "url(images/bg_Question.png)",
        backgroundSize: "100% 100%",
        backgroundPosition: 'center'
      }}>
        <div style={{ fontSize: "1.5rem", color: "#130A7F" }} className="font-bold pb-5 pt-3 mb-8">Câu hỏi thường gặp</div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Số lượng Trẻ em, Trẻ nhỏ được chấp nhận đi cùng một người lớn.!</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Điều gì xảy ra nếu điện thoại không chuyển ‘airplane mode’ khi bay?</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Giấy tờ xuất trình khi đi máy bay?</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Quy định về hành lý kí gửi của Vietjet Air</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Chính sách hỗ trợ đối với hành khách đến làm thủ tục trễ tại sân bay.</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Hành khách có được mang theo vật nuôi lên máy bay hay không?</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} 51 quốc gia, vùng lãnh thổ công dân Việt Nam du lịch không cần Visa</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Những vật dụng không được mang theo trong hành lý ký gửi?</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} 7 mẹo để có một chuyến du lịch suôn sẻ.</Link></div>
        <div><Link to={'#'} className="text-blue-800 hover:underline" style={{ fontSize: "0.75rem"}}>{'>>'} Lý do mở màn cửa sổ khi máy bay cất và hạ cánh</Link></div>
      </div>
    </div>
  </>
}

