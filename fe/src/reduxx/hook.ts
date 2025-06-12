import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Hook dùng để dispatch action có kiểu rõ ràng
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook dùng để select state có autocomplete
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
