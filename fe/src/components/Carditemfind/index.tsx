import React from "react";
import { TextField, Button, MenuItem, Select, FormControl, Box, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = React.useState("Tp Hồ Chí Minh");
  const [destinationCity, setDestinationCity] = React.useState("Hà Nội");
  const [departureDate, setDepartureDate] = React.useState(new Date("2025-05-16"));
  const [returnDate, setReturnDate] = React.useState(null);
  const [adults, setAdults] = React.useState(1);
  const [children, setChildren] = React.useState(0);
  const [infants, setInfants] = React.useState(0);

  const cities = [
    "Tp Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Cần Thơ",
    "Nha Trang",
    "Huế",
    "Đà Lạt",
    "Phú Quốc",
    "Vinh",
    "Hải Phòng",
    "Bangkok (Thái Lan)",
    "Singapore",
    "Tokyo (Nhật Bản)",
    "Seoul (Hàn Quốc)",
    "Kuala Lumpur (Malaysia)",
    "Sydney (Úc)",
    "Paris (Pháp)",
    "New York (Mỹ)",
  ];

  const inputStyles = {
    backgroundColor: "white",
    borderRadius: 2,
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiInputLabel-root": {
      display: "none",
    },
    "& .MuiSelect-select": {
      padding: "14px 16px",
    },
    "& .MuiInputBase-input": {
      padding: "14px 16px",
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #003087 0%, #0066cc 100%)",
          padding: { xs: 2, sm: 3 },
          borderRadius: 3,
          color: "white",
          textAlign: "center",
          maxWidth: "100%",
          margin: "0 auto",
          boxShadow: "0 8px 32px rgba(0, 48, 135, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          VÉ MÁY BAY GIÁ RẺ
        </Typography>

        {/* Cities Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            placeholder="Chọn điểm đi"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            select
            variant="outlined"
            sx={inputStyles}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            placeholder="Chọn điểm đến"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
            select
            variant="outlined"
            sx={inputStyles}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Dates Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
            mb: 2,
          }}
        >
          <DatePicker
            value={departureDate}
            onChange={(newValue) => setDepartureDate(newValue as any)}
            slotProps={{
              textField: {
                placeholder: "Chọn ngày đi",
                sx: {
                  ...inputStyles,
                  "& .MuiInputBase-input::placeholder": {
                    color: "#666",
                    opacity: 1,
                  },
                },
              },
            }}
          />
          <DatePicker
            value={returnDate}
            onChange={(newValue) => setReturnDate(newValue as any)}
            slotProps={{
              textField: {
                placeholder: "Chọn ngày về (không bắt buộc)",
                sx: {
                  ...inputStyles,
                  "& .MuiInputBase-input::placeholder": {
                    color: "#666",
                    opacity: 1,
                  },
                },
              },
            }}
          />
        </Box>

        {/* Passengers Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
            gap: 2,
            mb: 3,
          }}
        >
          <FormControl sx={inputStyles}>
            <Select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              displayEmpty
              renderValue={(value) => {
                if (!value) return "Người lớn";
                return `${value} Người lớn`;
              }}
            >
              <MenuItem disabled value="">
                Người lớn (từ 12 tuổi)
              </MenuItem>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} Người lớn
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <FormControl sx={inputStyles}>
            <Select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              displayEmpty
              renderValue={(value) => {
                if (value === 0) return "Trẻ em";
                return `${value} Trẻ em`;
              }}
            >
              <MenuItem disabled value="">
                Trẻ em (2-11 tuổi)
              </MenuItem>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} Trẻ em
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <FormControl sx={inputStyles}>
            <Select
              value={infants}
              onChange={(e) => setInfants(e.target.value)}
              displayEmpty
              renderValue={(value) => {
                if (value === 0) return "Em bé";
                return `${value} Em bé`;
              }}
            >
              <MenuItem disabled value="">
                Em bé (dưới 2 tuổi)
              </MenuItem>
              {[0, 1, 2].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} Em bé
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Search Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(45deg, #ff6b35 30%, #f7931e 90%)",
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            padding: { xs: "12px 24px", sm: "14px 32px" },
            borderRadius: 2,
            width: { xs: "100%", sm: "auto" },
            minWidth: { sm: "200px" },
            boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)",
            "&:hover": {
              background: "linear-gradient(45deg, #e55a2b 30%, #e8841a 90%)",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(255, 107, 53, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          TÌM CHUYẾN BAY
        </Button>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            fontStyle: "italic",
            opacity: 0.9,
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
            textDecoration: "underline",
            cursor: "pointer",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          Xem video hướng dẫn
        </Typography>
      </Box>
    </LocalizationProvider>
  );
};

export default FlightSearch;