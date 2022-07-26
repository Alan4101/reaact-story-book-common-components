import { Grid, ThemeProvider } from "@mui/material";
import { FC } from "react";
import { theme } from "./../../theme";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container width="100%" height="100vh">
        {children}
      </Grid>
    </ThemeProvider>
  );
};
