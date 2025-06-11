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
  Avatar,
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
  Person as PersonIcon,
  AdminPanelSettings as AdminIcon,
  SupervisorAccount as ModeratorIcon,
} from '@mui/icons-material';

// Types
interface User {
  id: string;
  userName: string;
  name: string;
  image: string;
  role: 'admin' | 'moderator' | 'user';
  createdAt: string;
  status: 'active' | 'inactive';
  email?: string;
}

// Mock data - giả lập data từ backend
const mockUsers: User[] = [
  {
    id: '1',
    userName: 'admin',
    name: 'Administrator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    role: 'admin',
    createdAt: '2024-01-15',
    status: 'active',
    email: 'admin@example.com'
  },
  {
    id: '2',
    userName: 'john_doe',
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'user',
    createdAt: '2024-02-10',
    status: 'active',
    email: 'john@example.com'
  },
  {
    id: '3',
    userName: 'jane_smith',
    name: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612d860?w=150',
    role: 'moderator',
    createdAt: '2024-01-28',
    status: 'active',
    email: 'jane@example.com'
  },
  {
    id: '4',
    userName: 'mike_wilson',
    name: 'Mike Wilson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    role: 'user',
    createdAt: '2024-03-05',
    status: 'inactive',
    email: 'mike@example.com'
  },
  {
    id: '5',
    userName: 'sarah_jones',
    name: 'Sarah Jones',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    role: 'moderator',
    createdAt: '2024-02-20',
    status: 'active',
    email: 'sarah@example.com'
  },
  {
    id: '6',
    userName: 'david_brown',
    name: 'David Brown',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
    role: 'user',
    createdAt: '2024-03-01',
    status: 'active',
    email: 'david@example.com'
  },
  {
    id: '7',
    userName: 'lisa_white',
    name: 'Lisa White',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    role: 'user',
    createdAt: '2024-02-15',
    status: 'active',
    email: 'lisa@example.com'
  },
  {
    id: '8',
    userName: 'tom_green',
    name: 'Tom Green',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150',
    role: 'moderator',
    createdAt: '2024-01-20',
    status: 'inactive',
    email: 'tom@example.com'
  },
  {
    id: '9',
    userName: 'anna_blue',
    name: 'Anna Blue',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150',
    role: 'user',
    createdAt: '2024-03-10',
    status: 'active',
    email: 'anna@example.com'
  },
  {
    id: '10',
    userName: 'peter_black',
    name: 'Peter Black',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150',
    role: 'admin',
    createdAt: '2024-01-10',
    status: 'active',
    email: 'peter@example.com'
  },
  {
    id: '11',
    userName: 'mary_red',
    name: 'Mary Red',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150',
    role: 'user',
    createdAt: '2024-02-25',
    status: 'active',
    email: 'mary@example.com'
  },
  {
    id: '12',
    userName: 'alex_gray',
    name: 'Alex Gray',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150',
    role: 'user',
    createdAt: '2024-03-08',
    status: 'inactive',
    email: 'alex@example.com'
  }
];

const RequestManament: React.FC = () => {
  // State quản lý dữ liệu
  const [allUsers] = useState<User[]>(mockUsers); // Data gốc từ BE
  const [filteredUsers, setFilteredUsers] = useState<User[]>(mockUsers);
  const [displayedUsers, setDisplayedUsers] = useState<User[]>([]);
  
  // State cho search và filter
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  // State cho phân trang
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  // Effect xử lý search và filter
  useEffect(() => {
    let filtered = allUsers;

    // Search theo tên hoặc username
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchLower) ||
        user.userName.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower)
      );
    }

    // Filter theo role
    if (roleFilter !== 'all') {
      filtered = filtered.filter(user => user.role === roleFilter);
    }

    // Filter theo status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    setFilteredUsers(filtered);
    setPage(0); // Reset về trang đầu khi search/filter
  }, [allUsers, searchTerm, roleFilter, statusFilter]);

  // Effect xử lý phân trang
  useEffect(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedUsers(filteredUsers.slice(startIndex, endIndex));
  }, [filteredUsers, page, rowsPerPage]);

  // Role styling
  const getRoleChip = (role: string) => {
    const configs = {
      admin: { color: 'error' as const, icon: <AdminIcon fontSize="small" />, label: 'Admin' },
      moderator: { color: 'warning' as const, icon: <ModeratorIcon fontSize="small" />, label: 'Moderator' },
      user: { color: 'primary' as const, icon: <PersonIcon fontSize="small" />, label: 'User' }
    };
    
    const config = configs[role as keyof typeof configs];
    return (
      <Chip
        label={config.label}
        color={config.color}
        size="small"
        icon={config.icon}
        variant="outlined"
      />
    );
  };

  // Status styling
  const getStatusChip = (status: string) => {
    return (
      <Chip
        label={status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
        color={status === 'active' ? 'success' : 'default'}
        size="small"
        variant="outlined"
      />
    );
  };

  // Handle actions
  const handleAddUser = () => {
    setSnackbar({
      open: true,
      message: 'Chuyển đến trang thêm người dùng mới!',
      severity: 'success'
    });
    // router.push('/admin/users/add');
  };

  const handleEditUser = (user: User) => {
    setSnackbar({
      open: true,
      message: `Chỉnh sửa người dùng: ${user.name}`,
      severity: 'success'
    });
    // router.push(`/admin/users/edit/${user.id}`);
  };

  const handleDeleteUser = (user: User) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa người dùng "${user.name}"?\nThao tác này không thể hoàn tác!`)) {
      // Gọi API xóa ở đây
      // deleteUserAPI(user.id);
      
      setSnackbar({
        open: true,
        message: `Đã xóa người dùng: ${user.name}`,
        severity: 'success'
      });
    }
  };

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
    setRoleFilter('all');
    setStatusFilter('all');
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: '#1a1a2e' }}>
          Quản lý người dùng
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Tổng cộng: <strong>{filteredUsers.length}</strong> người dùng 
          {searchTerm || roleFilter !== 'all' || statusFilter !== 'all' ? 
            ` (lọc từ ${allUsers.length} người dùng)` : ''
          }
        </Typography>
      </Box>

      {/* Toolbar */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: 2, boxShadow: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            alignItems: { xs: 'stretch', md: 'center' }
          }}
        >
          {/* Search */}
          <Box sx={{ flex: { xs: 1, md: 2 } }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Tìm kiếm theo tên, username, email..."
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
                }
              }}
            />
          </Box>

          {/* Filter Controls */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flex: { xs: 1, md: 1 },
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            {/* Role Filter */}
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Vai trò</InputLabel>
              <Select
                value={roleFilter}
                label="Vai trò"
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <MenuItem value="all">Tất cả</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="moderator">Moderator</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>

            {/* Status Filter */}
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Trạng thái</InputLabel>
              <Select
                value={statusFilter}
                label="Trạng thái"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">Tất cả</MenuItem>
                <MenuItem value="active">Hoạt động</MenuItem>
                <MenuItem value="inactive">Không hoạt động</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: { xs: 'center', md: 'flex-end' },
              flex: { xs: 1, md: 1 }
            }}
          >
            {(searchTerm || roleFilter !== 'all' || statusFilter !== 'all') && (
              <Button
                variant="outlined"
                size="small"
                onClick={handleClearFilters}
                startIcon={<FilterIcon />}
              >
                Xóa bộ lọc
              </Button>
            )}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddUser}
              sx={{
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
                  transform: 'translateY(-1px)',
                }
              }}
            >
              Thêm người dùng
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Table */}
      <Paper sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e', py: 2 }}>Người dùng</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Username</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Vai trò</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Trạng thái</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Ngày tạo</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedUsers.length > 0 ? (
                displayedUsers.map((user, index) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        transform: 'scale(1.001)',
                        transition: 'all 0.2s ease-in-out'
                      },
                      backgroundColor: index % 2 === 0 ? '#fafafa' : 'white'
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={user.image}
                          alt={user.name}
                          sx={{ 
                            width: 40, 
                            height: 40, 
                            mr: 2,
                            border: '2px solid #e0e0e0'
                          }}
                        />
                        <Box>
                          <Typography variant="body2" fontWeight="medium">
                            {user.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ID: {user.id}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium" color="primary">
                        @{user.userName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {user.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {getRoleChip(user.role)}
                    </TableCell>
                    <TableCell>
                      {getStatusChip(user.status)}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {new Date(user.createdAt).toLocaleDateString('vi-VN')}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                        <Tooltip title="Chỉnh sửa">
                          <IconButton
                            size="small"
                            onClick={() => handleEditUser(user)}
                            sx={{
                              color: '#2196F3',
                              '&:hover': {
                                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                                transform: 'scale(1.1)'
                              }
                            }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Xóa">
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteUser(user)}
                            sx={{
                              color: '#f44336',
                              '&:hover': {
                                backgroundColor: 'rgba(244, 67, 54, 0.1)',
                                transform: 'scale(1.1)'
                              }
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                      {searchTerm || roleFilter !== 'all' || statusFilter !== 'all' 
                        ? 'Không tìm thấy người dùng phù hợp với điều kiện lọc'
                        : 'Chưa có người dùng nào'
                      }
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
          count={filteredUsers.length}
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
            backgroundColor: '#fafafa'
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
    </Box>
  );
};

export default RequestManament;