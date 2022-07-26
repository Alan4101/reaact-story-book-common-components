import { Theme, Slider } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

export const usePlayerControlStyles = makeStyles((theme: Theme) => ({
  videoContainer: {
    margin: "12px",
    position: "relative",
    justifyContent: "center",
    border: "4px solid #ccc",
    borderRadius: "12px",
  },
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
  },
  mediaRoot: {
    width: "100%",
  },
  media: {},
  videoMediaQueryNotTopgolf: {
    height: "100%",
    width: "100%",
  },
  videoMediaQueryTopgolf: {
    height: "100%",
    width: "100%",
  },
  buttonControl: {
    padding: "10px 2px",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  constrolPlayContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttunsControlWrapper: {
    textAlign: "center",
  },
  timeBox: {
    textAlign: "center",
    color: "#ccc",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "26px",
  },
}));

export const PrettoSlider = withStyles({
  root: {
    height: 7,
    padding: 0,
  },
  thumb: {
    height: 0,
    width: 20,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
})(Slider);
