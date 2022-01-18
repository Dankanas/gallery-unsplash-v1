import { useSelector } from "react-redux";
import { ApplicationState } from "../store/types";

export const classNamesObject = () => {
    const theme = useSelector((state: ApplicationState) => state.themeSwitch);
    return {
        blue: theme === "blue",
        light: theme === "light",
      };
}