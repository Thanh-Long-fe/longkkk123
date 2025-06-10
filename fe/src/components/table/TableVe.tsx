import "../../table.css";
const TableVe = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        border: "solid 1px #c8c8c8",
        borderRadius: "10px",
        padding: "20px",
      }}
      className="mt-4"
    >
      <div
        className="font-bold"
        style={{ fontSize: "1.25rem", color: "#130A7F" }}
      >
        {title}
      </div>
      <div>
        <table className="w-full">
          <tbody style={{ fontSize: "0.75rem" }}>
            <tr>
              <td>
                <img
                  src="https://phongvemaybay360.com/wp-content/uploads/bfi_thumb/11-mt4bi81sl5saztbo6i2vy4t60ge16ghoybvr3hry1c.png"
                  alt=""
                />
              </td>
              <td>
                từ <b>Hà Nội</b>
              </td>
              <td>03/06/2025</td>
              <td>
                <b style={{ color: "red" }}>7,524,000 đồng/vé</b>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://phongvemaybay360.com/wp-content/uploads/bfi_thumb/smVN-mt4bi4afttn5pdh4sggdo5rbmwwkbo2rlt9t6dxiq8.png"
                  alt=""
                />
              </td>
              <td>
                từ <b>Hồ Chí Minh</b>
              </td>
              <td>14/05/2024</td>
              <td>
                <b style={{ color: "red" }}>899,000 đồng/vé</b>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://phongvemaybay360.com/wp-content/uploads/bfi_thumb/smBL-mt4bhr4p65556u08xarlp92vbipfbwmiw050gih15c.png"
                  alt=""
                />
              </td>
              <td>
                từ <b>Hồ Chí Minh</b>
              </td>
              <td>01/11/2015</td>
              <td>
                <b style={{ color: "red" }}>1,020,000 đồng/vé</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableVe;
