import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import { Toggle } from "./common/components/CustomToggle/CustomToggle";
import { VideoPlayer } from "./common/components/VideoPlayer/VideoPlayer";
import { Layout } from "./common/Layout/Layout";

function App() {
  const url =
    "https://res.cloudinary.com/socialvenu/video/upload/ar_4:5,c_fill,w_400/c_scale,fl_relative,l_sv-dev-assets:concord_filter,w_400,h_500,y_0/v1/sv-dev-stories/stories/42a9b15b-3574-4fd8-be11-f2c8b21d31c1.mp4";
  return (
    <>
      {/* <Toggle onChange={() => {}} pending={false} /> */}

      <VideoPlayer videoUrl={url} />
    </>
    // <Layout>
    //   <>
    //     components
    //     <Toggle onChange={() => {}} pending={false} />
    //   </>
    // </Layout>
  );
}

export default App;
