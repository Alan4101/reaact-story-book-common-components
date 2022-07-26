import { Grid } from "@mui/material";
import { FC } from "react";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container width="100%" height="100vh">
      {children}
    </Grid>
  );
};
