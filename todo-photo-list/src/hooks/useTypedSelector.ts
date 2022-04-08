import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/root";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector