import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import "./App.css";
import { AccordionNumbered } from "./common/components/AccordionNumbered/AccordionNumbered";
import { Toggle } from "./common/components/CustomToggle/CustomToggle";
import { VideoPlayer } from "./common/components/VideoPlayer/VideoPlayer";
import { Layout } from "./common/Layout/Layout";

function App() {
  const [expand, setExpand] = useState(false);
  const url =
    "https://res.cloudinary.com/socialvenu/video/upload/ar_4:5,c_fill,w_400/c_scale,fl_relative,l_sv-dev-assets:concord_filter,w_400,h_500,y_0/v1/sv-dev-stories/stories/42a9b15b-3574-4fd8-be11-f2c8b21d31c1.mp4";
  return (
    <Layout>
      <>
        <Toggle onChange={() => {}} pending={false} />

        <Grid container>
          <Grid item md={12}>
            <VideoPlayer videoUrl={url} />
          </Grid>
          <Grid container item md={12} justifyContent="center">
            <AccordionNumbered
              title="Some title"
              number={1}
              isExpanded={expand}
              toggleAccordion={() => setExpand(!expand)}
            >
              <>some desc ddd</>
            </AccordionNumbered>
          </Grid>
        </Grid>
      </>
    </Layout>
  );
}

export default App;
