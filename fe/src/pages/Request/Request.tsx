import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Alert,
  Snackbar,
  TablePagination,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';
import { createRequest, getAllRequests, getRequestById, updateRequest, updateRequestStatus } from '../../service/request';
import RequestDialog, { type IRequestFormInputs } from '../../components/dialogRequest/DialogRequest';
import { useAppSelector } from '../../reduxx/hook';
import RequestDialogEdit from '../../components/dialogRequest/DialogEdit';
import StatusSelect from '../../components/Select';

// Types
export interface IRequest {
  _id: string;
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  orderCode: string;
  amount: number;
  userId: {
    name: string;
    userName: string;
    _id: string;
  };
  status: 'pending' | 'approved' | 'rejected';
  createdAt?: Date;
  updatedAt?: Date;
}

// Mock data
const mockRequests: IRequest[] = [
  // Add sample data if needed
  // {
  //   accountHolderName: "John Doe",
  //   bankName: "Sample Bank",
  //   accountNumber: "1234567890",
  //   orderCode: "ORD123",
  //   amount: 1000,
  //   userId: { name: "John", userName: "johndoe", _id: "1" },
  //   status: "pending",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
];

const RequestManagement: React.FC = () => {
  // State management
  const [allRequests, setAllRequest] = useState<IRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<IRequest[]>([]);
  const [displayedRequests, setDisplayedRequests] = useState<IRequest[]>([]);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const auth = useAppSelector(state => state.auth);
  const [request, setRequest] = useState({
    accountHolderName: '',
    bankName: '',
    accountNumber: '',
    orderCode: '',
    amount: 0,
  });
  const [id, setId] = useState<string>("");
  // State for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  useEffect(() => {
    (async () => {
      try {
        const func = auth.role === "admin"
          ? getAllRequests
          : () => getRequestById(auth._id); // cần return promise như getAllRequests

        const { data } = await func();

        const finalData = auth.role === "admin" ? data : [data];

        setAllRequest(finalData);
      } catch (error) {
        console.log(error);

      }
    })()
  }, [])
  // Effect for search and filter
  useEffect(() => {
    let filtered = allRequests;

    // Search by account holder name, order code, or username
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (request) =>
          request.accountHolderName.toLowerCase().includes(searchLower) ||
          request.orderCode.toLowerCase().includes(searchLower) ||
          request.userId.userName.toLowerCase().includes(searchLower)
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter((request) => request.status === statusFilter);
    }

    setFilteredRequests(filtered);
    setPage(0); // Reset to first page
  }, [allRequests, searchTerm, statusFilter]);

  // Effect for pagination
  const handleChangeStatus = async (id: string, status: "pending" | "approved" | "rejected") => {
    try {
      const response = await updateRequestStatus(id, status);
      setAllRequest(pre => pre.map(v => v._id === response.data._id ? {
        ...v,
        status: response.data.status
      } : v))
      setSnackbar({
        open: true,
        message: 'Thành Công',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Thất bại',
        severity: 'error'
      });
    }

  }
  useEffect(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedRequests(filteredRequests.slice(startIndex, endIndex));
  }, [filteredRequests, page, rowsPerPage]);

  // Status styling
  const getStatusChip = (status: string) => {
    const configs = {
      pending: { color: 'warning' as const, label: 'Đang chờ' },
      approved: { color: 'success' as const, label: 'Đã duyệt' },
      rejected: { color: 'error' as const, label: 'Đã từ chối' },
    };

    const config = configs[status as keyof typeof configs];
    return (
      <Chip
        label={config.label}
        color={config.color}
        size="small"
        variant="outlined"
      />
    );
  };


  const handleEditRequest = (request: IRequest, id: string) => {
    setId(id)
    setRequest(request)
    setOpenEdit(true)
  };

  const handleSubmitAdd = async (data: IRequestFormInputs) => {
    try {
      const response = await createRequest({ ...data, userId: auth._id, status: "pending" });
      setAllRequest(pre => [...pre, response.data])
      setSnackbar({
        open: true,
        message: 'Thành Công',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Thất bại',
        severity: 'error'
      });
    }
  }
  const handleSubmitEdit = async (data: IRequestFormInputs) => {
    try {
      const response = await updateRequest({ ...data }, id);
      setAllRequest(pre => pre.map(v => v._id === response.data._id ? {
        ...v,
        accountHolderName: response.data.accountHolderName,
        bankName: response.data.bankName,
        accountNumber: response.data.accountNumber,
        orderCode: response.data.orderCode,
        amount: response.data.amount,
      } : v))
      setSnackbar({
        open: true,
        message: 'Thành Công',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Thất bại',
        severity: 'error'
      });
    }
  }

  // Handle pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Clear filters
  const handleClearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: '#1a1a2e' }}>
          Quản lý yêu cầu
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Tổng cộng: <strong>{filteredRequests.length}</strong> yêu cầu
          {searchTerm || statusFilter !== 'all'
            ? ` (lọc từ ${allRequests.length} yêu cầu)`
            : ''}
        </Typography>
      </Box>

      {/* Toolbar */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: 2, boxShadow: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            alignItems: { xs: 'stretch', md: 'center' },
          }}
        >
          {/* Search */}
          <Box sx={{ flex: { xs: 1, md: 2 } }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Tìm kiếm theo tên, mã đơn, username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#2196F3',
                  },
                },
              }}
            />
          </Box>

          {/* Filter Controls */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flex: { xs: 1, md: 1 },
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            {/* Status Filter */}
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Trạng thái</InputLabel>
              <Select
                value={statusFilter}
                label="Trạng thái"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">Tất cả</MenuItem>
                <MenuItem value="pending">Đang chờ</MenuItem>
                <MenuItem value="approved">Đã duyệt</MenuItem>
                <MenuItem value="rejected">Đã từ chối</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: { xs: 'center', md: 'flex-end' },
              flex: { xs: 1, md: 1 },
            }}
          >
            {(searchTerm || statusFilter !== 'all') && (
              <Button
                variant="outlined"
                size="small"
                onClick={handleClearFilters}
                startIcon={<FilterIcon />}
              >
                Xóa bộ lọc
              </Button>
            )}
            {auth.role === "user" && <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenAdd(true)}
              sx={{
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Thêm yêu cầu
            </Button>}
          </Box>
        </Box>
      </Paper>

      {/* Table */}
      <Paper sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e', py: 2 }}>
                  Chủ tài khoản
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Ngân hàng</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>
                  Số tài khoản
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Mã đơn</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Số tiền</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Người yêu cầu</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Trạng thái</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Ngày tạo</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>
                  Thao tác
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRequests.length > 0 ? (
                displayedRequests.map((request, index) => (
                  <TableRow
                    key={request.orderCode}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        transform: 'scale(1.001)',
                        transition: 'all 0.2s ease-in-out',
                      },
                      backgroundColor: index % 2 === 0 ? '#fafafa' : 'white',
                    }}
                  >
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium">
                        {request.accountHolderName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{request.bankName}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{request.accountNumber}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium" color="primary">
                        {request.orderCode}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {request.amount.toLocaleString('vi-VN')} VNĐ
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="body2" fontWeight="medium">
                          {request.userId?.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          @{request.userId?.userName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{getStatusChip(request.status)}</TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {request.createdAt
                          ? new Date(request.createdAt).toLocaleDateString('vi-VN')
                          : '-'}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                        {
                          auth.role === "user" && <Tooltip title="Chỉnh sửa">
                            <IconButton
                              size="small"
                              onClick={() => handleEditRequest(request, request._id)}
                              sx={{
                                color: '#2196F3',
                                '&:hover': {
                                  backgroundColor: 'rgba(33, 150, 243, 0.1)',
                                  transform: 'scale(1.1)',
                                },
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        }
                        {auth.role === "admin" && <StatusSelect value={request.status} onChange={(e) => handleChangeStatus(request._id, e.target.value as any)} />
                        }
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} align="center" sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                      {searchTerm || statusFilter !== 'all'
                        ? 'Không tìm thấy yêu cầu phù hợp với điều kiện lọc'
                        : 'Chưa có yêu cầu nào'}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={filteredRequests.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Số dòng mỗi trang:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`
          }
          sx={{
            borderTop: '1px solid #e0e0e0',
            backgroundColor: '#fafafa',
          }}
        />
      </Paper>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <RequestDialog onClose={() => setOpenAdd(false)} open={openAdd} onSubmit={handleSubmitAdd} />
      <RequestDialogEdit onClose={() => setOpenEdit(false)} open={openEdit} onSubmit={handleSubmitEdit} request={request} />
    </Box>
  );
};

export default RequestManagement;