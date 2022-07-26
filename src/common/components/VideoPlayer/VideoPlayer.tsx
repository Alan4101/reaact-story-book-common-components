import { Box, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { FC, useRef } from "react";
import { BackwardIcon } from "../../assets/videoPlayerIcons/BackwardIcon";
import { ForwardIcon } from "../../assets/videoPlayerIcons/ForwardIcon";
import { MuteVolumeIcon } from "../../assets/videoPlayerIcons/MuteVolumeIcon";
import { PlayIcon } from "../../assets/videoPlayerIcons/PlayIcon";
import { VolumeIcon } from "../../assets/videoPlayerIcons/VolumeIcon";
import { usePlayerControls } from "../../services/hooks/usePlayerControl";
import { formatTime } from "./VideoPlayer.helper";

import {
  // PrettoSlider,
  StyledSlider,
  usePlayerControlStyles,
} from "./VideoPlayer.style";

interface PayerControlProps {
  videoUrl: string;
  width?: string;
  heigth?: string;
}

export const VideoPlayer: FC<PayerControlProps> = ({
  videoUrl,
  heigth = "500px",
  width = "400px",
}) => {
  const classes = usePlayerControlStyles();
  const refVideo = useRef<HTMLVideoElement | null>(null);
  const {
    backwardVideo,
    forwardVideo,
    togglePlayer,
    handleOnTimeUpdate,
    handleVideoProgress,
    playerState,
    setPlayerState,
    toggleMute,
  } = usePlayerControls(refVideo);
  return (
    <Grid
      container
      className={classes.videoContainer}
      sx={{ width: width, height: heigth }}
    >
      <Grid sx={{ overflow: "hidden", borderRadius: "12px" }}>
        <CardMedia
          autoPlay
          component="video"
          ref={refVideo}
          onTimeUpdate={handleOnTimeUpdate}
          src={videoUrl}
          classes={{
            root: classes.mediaRoot,
            media: classes.videoMediaQueryNotTopgolf,
          }}
          onEnded={() => setPlayerState({ ...playerState, isPlaying: false })}
        />
        <Box className={classes.root}>
          <Grid container display="flex" flexDirection="row">
            <Grid
              item
              xs={3}
              container
              className={classes.constrolPlayContainer}
            >
              <Grid item xs={4} className={classes.buttunsControlWrapper}>
                <IconButton
                  className={classes.buttonControl}
                  onClick={backwardVideo}
                >
                  <BackwardIcon />
                </IconButton>
              </Grid>
              <Grid item xs={4} className={classes.buttunsControlWrapper}>
                <IconButton
                  className={classes.buttonControl}
                  onClick={togglePlayer}
                >
                  {playerState.isPlaying ? <>||</> : <PlayIcon />}
                </IconButton>
              </Grid>
              <Grid item xs={4} className={classes.buttunsControlWrapper}>
                <IconButton
                  className={classes.buttonControl}
                  onClick={forwardVideo}
                >
                  <ForwardIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item container xs={6} className={classes.flexContainer}>
              <Grid item xs={12}>
                <StyledSlider
                  min={0}
                  max={100}
                  value={playerState.timeProgress}
                  onChange={handleVideoProgress}
                ></StyledSlider>
              </Grid>
            </Grid>
            <Grid item container xs={3} className={classes.flexContainer}>
              <Grid item xs={8}>
                <Typography className={classes.timeBox}>
                  {formatTime(playerState.currentTime)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton
                  onClick={toggleMute}
                  sx={{ width: "40px", height: "40px" }}
                >
                  {!playerState.isMuted ? <VolumeIcon /> : <MuteVolumeIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
