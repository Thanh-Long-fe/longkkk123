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
import { getListUser, lock, register, updateUser } from '../../service/auth';
import UserDialog, { type UserFormInputs } from '../../components/dialogAdduser/Dialog';
import UserDialogEdit from '../../components/dialogAdduser/DialogEdit';

// Types
interface User {
    _id: string;
    userName: string;
    name: string;
    image?: string;
    role: 'admin' | 'user';
    createdAt: string;
    status: 'active' | 'inactive';
    password: string
}

const UserManagement: React.FC = () => {
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [displayedUsers, setDisplayedUsers] = useState<User[]>([]);
    const [openAdd, setOpenAdd] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const [user, setUser] = useState<UserFormInputs>({
        userName: "",
        name: "",
        password: "",
        role: "user",
        status: "active",
        image: ""
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });
    useEffect(() => {
        (async () => {
            const { data } = await getListUser();
            setAllUsers(data)
        })()
    }, [])
    useEffect(() => {
        let filtered = allUsers;

        if (searchTerm.trim()) {
            const searchLower = searchTerm.toLowerCase().trim();
            filtered = filtered.filter(user =>
                user.name.toLowerCase().includes(searchLower) ||
                user.userName.toLowerCase().includes(searchLower)
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
        setOpenAdd(true);
        // router.push('/admin/users/add');
    };

    const handleEditUser = (users: User) => {
        setId(users._id);
        setOpenEdit(true);
        setUser({
            userName: users.userName,
            name: users.name,
            password: users.password,
            role: users.role,
            status: users.status,
            image: users.image || ''
        });
    };

    const handleDeleteUser = async (id: string, status: string) => {
      try {
        if(confirm(`Có muốn ${status === 'active' ? 'inactive' : 'active'}`)) {
            const { data } = await lock(id, status);
            setAllUsers(pre => pre.map(v => v._id === data._id ? {
                ...v,
                status: data.status
            } : v))
        }     
      } catch (error) {
        
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
    const handleSubmitAdd = async (data: UserFormInputs) => {
        try {
            const response = await register({ ...data });
            setAllUsers(pre => [...pre, {
                role: response.data.role,
                _id: response.data._id,
                createdAt: response.data.createdAt,
                name: response.data.name,
                password: response.data.password,
                status: response.data.status,
                userName: response.data.userName,
                image: response.data?.image || '',
            }])
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
    const handleSubmitEdit = async (data: UserFormInputs) => {
        try {
            const response = await updateUser(id, { ...data });
            setAllUsers(pre => pre.map(v => v._id === id ? {
                role: response.data.role,
                _id: response.data._id,
                createdAt: response.data.createdAt,
                name: response.data.name,
                password: response.data.password,
                status: response.data.status,
                userName: response.data.userName,
                image: response.data?.image || '',
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
                                <TableCell sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>Password</TableCell>
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
                                        key={user._id}
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
                                                {user.image ? (

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
                                                ) : (<Avatar
                                                    sx={{
                                                        width: 40,
                                                        height: 40,
                                                        mr: 2,
                                                        border: '2px solid #e0e0e0'
                                                    }}
                                                />)}
                                                <Box>
                                                    <Typography variant="body2" fontWeight="medium">
                                                        {user.name}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        ID: {user._id}
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
                                            <Typography variant="body2" fontWeight="medium" color="primary">
                                                {user.password}
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
                                                <Tooltip title="Mở khóa hoặc khóa">
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => handleDeleteUser(user._id, user.status)}
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
            <UserDialog open={openAdd} onClose={() => setOpenAdd(false)} onSubmit={handleSubmitAdd} />
            <UserDialogEdit open={openEdit} onClose={() => setOpenEdit(false)} onSubmit={handleSubmitEdit} user={{
                userName: user.userName,
                name: user.name,
                password: user.password,
                role: user.role,
                status: user.status,
                image: user.image
            }} />

        </Box>
    );
};

export default UserManagement;