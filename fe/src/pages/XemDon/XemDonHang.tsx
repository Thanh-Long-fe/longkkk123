import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const OrderCheckComponent: React.FC = () => {
  const [orderId, setOrderId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleCheck = () => {
    // Simulate check logic and show dialog if not found
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        p: 2,
        justifyContent: "center",
      }}
    >
      <TextField
        label="Mã đơn hàng(*)"
        variant="outlined"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        sx={{ width: "200px" }}
      />
      <TextField
        label="Số điện thoại(*)"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        sx={{ width: "200px" }}
      />
      <Button
        variant="contained"
        onClick={handleCheck}
        sx={{
          backgroundColor: "#d8a7e6",
          color: "white",
          "&:hover": { backgroundColor: "#c77ed7" },
        }}
      >
        Kiểm tra
      </Button>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText>Không tìm thấy</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: "#d8a7e6" }}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderCheckComponent;
