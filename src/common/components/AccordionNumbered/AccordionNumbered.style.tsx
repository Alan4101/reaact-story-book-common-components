import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAccordionNumberedStyles = makeStyles((theme: Theme) => ({
  AccordionNumbered: {
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
  },
  Number: {
    flexShrink: "0 !important",
    flexBasis: "30px",
    marginRight: "14px",
    textAlign: "center",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "28px",
    letterSpacing: "0.02em",
    color: "#000",
    border: "1px solid",
    borderColor: "#ccc",
    borderRadius: "50%",
  },
  Title: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.02em",
    color: "#000",
    whiteSpace: "nowrap",
  },
  Subtitle: {
    fontSize: "12px",
    lineHeight: "24px",
    color: "#8B89A0",
  },
  SummaryWithSwitch: {
    //
  },
  SummaryWithTooltip: {
    // '& .MuiAccordionSummary-content': {
    display: "flex",
    alignItems: "center",
    padding: "0",
    // },
  },
  Tooltip: {
    width: "14px",
    height: "14px",
    color: "#8B89A0",
    marginLeft: "12px",
    borderRadius: "50%",
    border: "1px solid",
    borderColor: "#8B89A0",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
}));
