import React, { useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, MenuItem
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// List of banks in Vietnam
const vietnamBanks = [
    'Agribank',
    'Vietcombank',
    'VietinBank',
    'BIDV',
    'Techcombank',
    'MB Bank',
    'VPBank',
    'Sacombank',
    'ACB (Asia Commercial Bank)',
    'HDBank',
    'TPBank',
    'VIB (Vietnam International Commercial Bank)',
    'Eximbank',
    'Saigon Bank',
    'OCB (Orient Commercial Bank)',
    'LienVietPostBank',
    'SHB (Saigon-Hanoi Bank)',
    'SeABank',
    'Bac A Bank',
    'Nam A Bank',
    'PG Bank',
    'VietABank',
    'EAB (Eastern Asia Commercial Bank)',
    'GP Bank',
    'Indovina Bank',
    'Vietnam-Russia Joint Venture Bank (VRB)',
    'Shinhan Bank Vietnam',
    'Woori Bank Vietnam',
    'HSBC Vietnam',
    'Standard Chartered Vietnam',
    'ANZ Bank Vietnam',
    'Citibank Vietnam',
    'UOB Vietnam',
    'Deutsche Bank Vietnam',
    'J.P. Morgan Chase Vietnam',
    'Public Bank Vietnam',
    'Mekong Delta Housing Development Bank (MHB)',
    'Vietnam Development Bank (VDB)',
    'Vietnam Bank for Social Policy (VBSP)',
];

export interface IRequestFormInputs {
    accountHolderName: string;
    bankName: string;
    accountNumber: string;
    orderCode: string;
    amount: number;
}

const schema = yup.object({
    accountHolderName: yup.string().required('Tên chủ tài khoản là bắt buộc'),
    bankName: yup
        .string()
        .oneOf(vietnamBanks, 'Vui lòng chọn ngân hàng hợp lệ')
        .required('Tên ngân hàng là bắt buộc'),
    accountNumber: yup
        .string()
        .matches(/^\d+$/, 'Số tài khoản chỉ được chứa số')
        .required('Số tài khoản là bắt buộc'),
    orderCode: yup.string().required('Mã đơn là bắt buộc'),
    amount: yup
        .number()
        .positive('Số tiền phải lớn hơn 0')
        .required('Số tiền là bắt buộc'),
}).required();

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: IRequestFormInputs) => void;
    request: IRequestFormInputs
}

const RequestDialogEdit: React.FC<Props> = ({ open, onClose, onSubmit, request }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequestFormInputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            accountHolderName: '',
            bankName: '',
            accountNumber: '',
            orderCode: '',
            amount: 0,
        },
    });

    const handleFormSubmit = (data: IRequestFormInputs) => {
        onSubmit(data);
        reset();
        onClose();
    };

    useEffect(() => {
        reset({
            accountHolderName: request.accountHolderName,
            bankName: request.bankName,
            accountNumber: request.accountNumber,
            orderCode: request.orderCode,
            amount: request.amount,
        })
    }, [request])

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Tạo yêu cầu</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(handleFormSubmit)} id="request-form">
                    <TextField
                        label="Tên chủ tài khoản"
                        fullWidth
                        margin="normal"
                        {...register('accountHolderName')}
                        error={!!errors.accountHolderName}
                        helperText={errors.accountHolderName?.message}
                    />
                    <TextField
                        label="Tên ngân hàng"
                        select
                        fullWidth
                        margin="normal"
                        {...register('bankName')}
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
                        {...register('accountNumber')}
                        error={!!errors.accountNumber}
                        helperText={errors.accountNumber?.message}
                    />
                    <TextField
                        label="Mã đơn"
                        fullWidth
                        margin="normal"
                        {...register('orderCode')}
                        error={!!errors.orderCode}
                        helperText={errors.orderCode?.message}
                    />
                    <TextField
                        label="Số tiền (VNĐ)"
                        type="number"
                        fullWidth
                        margin="normal"
                        {...register('amount')}
                        error={!!errors.amount}
                        helperText={errors.amount?.message}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button type="submit" form="request-form" variant="contained">Tạo</Button>
            </DialogActions>
        </Dialog>
    );
};

export default RequestDialogEdit;