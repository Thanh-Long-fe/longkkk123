import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, MenuItem
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axiosInstance from '../../service/client';

export interface UserFormInputs {
  userName: string;
  name: string;
  password: string;
  role: 'user' | 'admin';
  status: 'active' | 'inactive';
  image: string;
}

const schema = yup.object({
  userName: yup.string().required('Tên đăng nhập là bắt buộc'),
  name: yup.string().required('Tên là bắt buộc'),
  password: yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
  role: yup.string().oneOf(['user', 'admin'] as const).required('Vai trò là bắt buộc'),
  status: yup.string().oneOf(['active', 'inactive'] as const).required('Trạng thái là bắt buộc'),
  image: yup.string().url('Phải là một URL hợp lệ').default('')
}).required();

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormInputs) => void;
}

const UserDialog: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset, setValue} = useForm<UserFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: '',
      name: '',
      password: '',
      role: 'user',
      status: 'active',
      image: ''
    }
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    const res = await axiosInstance.post('http://localhost:3000/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  
    setValue('image', res.data.url); // lưu vào form
  };

  const handleFormSubmit = (data: UserFormInputs) => {
    onSubmit(data);
    reset(); // Reset form sau khi submit
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Tạo người dùng</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} id="user-form">
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            {...register('userName')}
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />
          <TextField
            label="Tên"
            fullWidth
            margin="normal"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Mật khẩu"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            type='file'
            onChange={handleFileChange}
            error={!!errors.image}
            helperText={errors.image?.message}
          />
          <TextField
            label="Vai trò"
            select
            fullWidth
            margin="normal"
            {...register('role')}
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
            {...register('status')}
            error={!!errors.status}
            helperText={errors.status?.message}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button type="submit" form="user-form" variant="contained">Tạo</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;
