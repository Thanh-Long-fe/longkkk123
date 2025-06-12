import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../reduxx/hook";
import { clearUser } from "../reduxx/authSlice";

// components/admin/Header.tsx
const Header = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const signOut = async () => {
    dispatch(clearUser());
    window.location.href = "/";
  };
  return (
    <header className="w-full h-16 bg-white shadow px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div>
        Xin chào, {auth.userName}{" "}
        <Button onClick={signOut} variant="contained">
          Đăng xuất
        </Button>
      </div>
    </header>
  );
};

export default Header;
