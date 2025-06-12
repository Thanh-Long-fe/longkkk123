import React from "react";
import { Backdrop, CircularProgress, styled, Typography } from "@mui/material";

interface FullScreenLoadingProps {
  open: boolean;
  message?: string;
}

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({
  open,
  message,
}) => {
  return (
    <StyledBackdrop open={open}>
      <CircularProgress color="inherit" size={60} thickness={4} />
      {message && <Typography variant="h6">{message}</Typography>}
    </StyledBackdrop>
  );
};

export default FullScreenLoading;
