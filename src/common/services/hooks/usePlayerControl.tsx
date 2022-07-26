import { MutableRefObject, useEffect, useState } from "react";

interface PlayerState {
  currentTime: number;
  timeProgress: number;
  isPlaying: boolean;
  isMuted: boolean;
}
export const usePlayerControls = (
  videoRef: MutableRefObject<HTMLVideoElement | null>
) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentTime: videoRef.current ? videoRef.current.currentTime : 0,
    isPlaying: true,
    timeProgress: videoRef.current
      ? videoRef.current.currentTime / videoRef.current.duration
      : 0,
    isMuted: false,
  });

  const handleOnTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setPlayerState({
        ...playerState,
        timeProgress: progress,
        currentTime: videoRef.current.currentTime,
      });
    }
  };
  const togglePlayer = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setPlayerState({ ...playerState, isPlaying: true });
        });
      } else {
        videoRef.current.pause();

        setPlayerState({ ...playerState, isPlaying: false });
      }
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      playerState.isMuted
        ? (videoRef.current.muted = true)
        : (videoRef.current.muted = false);
    }
  }, [playerState.isMuted, videoRef]);
  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };
  const forwardVideo = () => {
    if (videoRef.current) {
      const nextTime = videoRef.current?.currentTime + 15.0;
      videoRef.current!.currentTime = nextTime;
    }
  };
  const backwardVideo = () => {
    if (videoRef.current) {
      const nextTime = videoRef.current.currentTime - 15.0;
      videoRef.current!.currentTime = nextTime;
    }
  };
  const handleVideoProgress = (event: Event, value: number | number[]) => {
    if (videoRef.current) {
      const manualChange = value as number;
      videoRef.current.currentTime =
        (videoRef.current.duration / 100) * manualChange;

      setPlayerState({ ...playerState, timeProgress: manualChange });
    }
  };
  return {
    forwardVideo,
    backwardVideo,
    togglePlayer,
    handleOnTimeUpdate,
    handleVideoProgress,
    playerState,
    setPlayerState,
    toggleMute,
  };
};
