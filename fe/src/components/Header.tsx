import { Button, Typography } from "@mui/material";
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
      <div className="flex items-center">
        <Typography sx={{ fontWeight: "bold", padding: "0px 10px" }}>
          {" "}
          Xin chào, {auth.userName}{" "}
        </Typography>
        <Button
          onClick={signOut}
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
            "&:hover": {
              background: "linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)",
              transform: "translateY(-1px)",
            },
            color: "#fff",
          }}
        >
          Đăng xuất
        </Button>
      </div>
    </header>
  );
};

export default Header;
