import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  CircularProgress,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "../../service/client";

export interface UserFormInputs {
  userName: string;
  name: string;
  password: string;
  role: "user" | "admin";
  status: "active" | "inactive";
  image: string;
  _id?: string;
}

const schema = yup
  .object({
    userName: yup
      .string()
      .required("Tên đăng nhập là bắt buộc")
      .max(50, "Tên đăng nhập không được quá 50 ký tự"),
    name: yup
      .string()
      .required("Tên là bắt buộc")
      .max(100, "Tên không được quá 100 ký tự"),
    password: yup
      .string()
      .min(6, "Mật khẩu ít nhất 6 ký tự")
      .max(50, "Mật khẩu không được quá 50 ký tự")
      .required("Mật khẩu là bắt buộc"),
    role: yup
      .string()
      .oneOf(["user", "admin"] as const)
      .required("Vai trò là bắt buộc"),
    status: yup
      .string()
      .oneOf(["active", "inactive"] as const)
      .required("Trạng thái là bắt buộc"),
    image: yup.string().url("Phải là một URL hợp lệ").default(""),
  })
  .required();

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormInputs) => void;
  user: UserFormInputs;
}

const UserDialogEdit: React.FC<Props> = ({ open, onClose, onSubmit, user }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>(user.image || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<UserFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: user.userName,
      name: user.name,
      password: user.password,
      role: user.role,
      status: user.status,
      image: user.image,
    },
  });

  useEffect(() => {
    reset({
      userName: user.userName,
      name: user.name,
      password: user.password,
      role: user.role,
      status: user.status,
      image: user.image,
    });
    setPreviewUrl(user.image || "");
  }, [user]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview URL
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      setValue("image", res.data.url);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteImage = () => {
    setValue("image", "");
    setPreviewUrl("");
  };

  const handleFormSubmit = (data: UserFormInputs) => {
    onSubmit(data);
    reset();
    setPreviewUrl("");
    onClose();
  };

  const handleClose = () => {
    reset();
    setPreviewUrl(user.image || "");
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Sửa người dùng</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} id="user-form">
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 50 }}
            {...register("userName")}
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />
          <TextField
            label="Tên"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 100 }}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Mật khẩu"
            type="text"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 50 }}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Box sx={{ mt: 2, mb: 2 }}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="image-upload">
              <Button
                variant="outlined"
                component="span"
                disabled={isUploading}
                fullWidth
              >
                {isUploading ? <CircularProgress size={24} /> : "Tải ảnh lên"}
              </Button>
            </label>
          </Box>

          {previewUrl && (
            <Box sx={{ position: "relative", mb: 2 }}>
              <img
                src={previewUrl}
                alt="Preview"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <IconButton
                onClick={handleDeleteImage}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}

          <TextField
            label="Vai trò"
            select
            fullWidth
            margin="normal"
            defaultValue={user.role}
            {...register("role")}
            error={!!errors.role}
            helperText={errors.role?.message}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <TextField
            label="Trạng thái"
            select
            fullWidth
            margin="normal"
            defaultValue={user.status}
            {...register("status")}
            error={!!errors.status}
            helperText={errors.status?.message}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button
          type="submit"
          form="user-form"
          variant="contained"
          disabled={isUploading}
        >
          Sửa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialogEdit;
