import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// List of banks in Vietnam
const vietnamBanks = [
  "Agribank",
  "Vietcombank",
  "VietinBank",
  "BIDV",
  "Techcombank",
  "MB Bank",
  "VPBank",
  "Sacombank",
  "ACB (Asia Commercial Bank)",
  "HDBank",
  "TPBank",
  "VIB (Vietnam International Commercial Bank)",
  "Eximbank",
  "Saigon Bank",
  "OCB (Orient Commercial Bank)",
  "LienVietPostBank",
  "SHB (Saigon-Hanoi Bank)",
  "SeABank",
  "Bac A Bank",
  "Nam A Bank",
  "PG Bank",
  "VietABank",
  "EAB (Eastern Asia Commercial Bank)",
  "GP Bank",
  "Indovina Bank",
  "Vietnam-Russia Joint Venture Bank (VRB)",
  "Shinhan Bank Vietnam",
  "Woori Bank Vietnam",
  "HSBC Vietnam",
  "Standard Chartered Vietnam",
  "ANZ Bank Vietnam",
  "Citibank Vietnam",
  "UOB Vietnam",
  "Deutsche Bank Vietnam",
  "J.P. Morgan Chase Vietnam",
  "Public Bank Vietnam",
  "Mekong Delta Housing Development Bank (MHB)",
  "Vietnam Development Bank (VDB)",
  "Vietnam Bank for Social Policy (VBSP)",
];

export interface IRequestFormInputs {
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  orderCode: string;
  amount: number;
  reason: string;
}

const schema = yup
  .object({
    accountHolderName: yup
      .string()
      .required("Tên chủ tài khoản là bắt buộc")
      .max(100, "Tên chủ tài khoản không được quá 100 ký tự"),
    bankName: yup
      .string()
      .oneOf(vietnamBanks, "Vui lòng chọn ngân hàng hợp lệ")
      .required("Tên ngân hàng là bắt buộc"),
    accountNumber: yup
      .string()
      .matches(/^\d+$/, "Số tài khoản chỉ được chứa số")
      .required("Số tài khoản là bắt buộc")
      .max(20, "Số tài khoản không được quá 20 ký tự"),
    orderCode: yup
      .string()
      .required("Mã đơn là bắt buộc")
      .max(50, "Mã đơn không được quá 50 ký tự"),
    amount: yup
      .number()
      .positive("Số tiền phải lớn hơn 0")
      .required("Số tiền là bắt buộc")
      .max(1000000000000, "Số tiền không được quá 1 tỷ VNĐ"),
    reason: yup
      .string()
      .required("Lý do là bắt buộc")
      .max(500, "Lý do không được quá 500 ký tự"),
  })
  .required();

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: IRequestFormInputs) => void;
}

const RequestDialog: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRequestFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      orderCode: "",
      amount: 0,
      reason: "",
    },
  });

  const handleFormSubmit = (data: IRequestFormInputs) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Tạo yêu cầu</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} id="request-form">
          <TextField
            label="Tên chủ tài khoản"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 100 }}
            {...register("accountHolderName")}
            error={!!errors.accountHolderName}
            helperText={errors.accountHolderName?.message}
          />
          <TextField
            label="Tên ngân hàng"
            select
            fullWidth
            margin="normal"
            {...register("bankName")}
            error={!!errors.bankName}
            helperText={errors.bankName?.message}
          >
            {vietnamBanks.length > 0 ? (
              vietnamBanks.map((bank) => (
                <MenuItem key={bank} value={bank}>
                  {bank}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>Không có ngân hàng</MenuItem>
            )}
          </TextField>
          <TextField
            label="Số tài khoản"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 20 }}
            {...register("accountNumber")}
            error={!!errors.accountNumber}
            helperText={errors.accountNumber?.message}
          />
          <TextField
            label="Mã đơn"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 50 }}
            {...register("orderCode")}
            error={!!errors.orderCode}
            helperText={errors.orderCode?.message}
          />
          <TextField
            label="Số tiền (VNĐ)"
            type="number"
            fullWidth
            margin="normal"
            inputProps={{ max: 1000000000000 }}
            {...register("amount")}
            error={!!errors.amount}
            helperText={errors.amount?.message}
          />
          <TextField
            label="Lý do"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            inputProps={{ maxLength: 500 }}
            {...register("reason")}
            error={!!errors.reason}
            helperText={errors.reason?.message}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button type="submit" form="request-form" variant="contained">
          Tạo
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestDialog;
