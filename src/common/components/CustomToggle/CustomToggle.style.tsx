import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useToggleStyle = makeStyles((theme: Theme) => ({
  root: {
    width: 38,
    height: 24,
    padding: 0,
  },
  label: {
    marginLeft: 0,
  },
  track: {
    background: "rgba(82, 66, 234, 0.1)",
    borderRadius: 20,
    opacity: 1,
  },
  switchBase: {
    color: "#8B89A0",
    padding: "2px 4px",
    "&$checked + $track": {
      opacity: "1 !important",
    },
  },
  checked: {
    transform: "translateX(10px) !important",
    color: `#ccc !important`,
  },
}));
