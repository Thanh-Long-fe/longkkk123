import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

interface StatusSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

const statusColors: Record<string, string> = {
  pending: "#fbc02d", // vàng
  approved: "#2e7d32", // xanh lá
  rejected: "#d32f2f", // đỏ
};

export default function StatusSelect({ value, onChange }: StatusSelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="status-label">Status</InputLabel>
      <Select
        labelId="status-label"
        value={value}
        label="Status"
        onChange={onChange}
        sx={{
          color: statusColors[value],
          fontWeight: 600,
        }}
      >
        <MenuItem value="pending" sx={{ color: statusColors.pending }}>
          Pending
        </MenuItem>
        <MenuItem value="approved" sx={{ color: statusColors.approved }}>
          Approved
        </MenuItem>
        <MenuItem value="rejected" sx={{ color: statusColors.rejected }}>
          Rejected
        </MenuItem>
      </Select>
    </FormControl>
  );
}
