import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

export function useCustomNav() {
    return useContext(NavigationContext);
}