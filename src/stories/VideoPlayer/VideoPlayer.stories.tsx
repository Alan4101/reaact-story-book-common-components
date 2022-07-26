import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VideoPlayer } from "../../common/components/VideoPlayer/VideoPlayer";

export default {
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const VideoPlayerTemplate: ComponentStory<typeof VideoPlayer> = (args) => (
  <VideoPlayer {...args} />
);
export const Video = VideoPlayerTemplate.bind({});
Video.args = {
  videoUrl:
    "https://res.cloudinary.com/socialvenu/video/upload/ar_4:5,c_fill,w_400/c_scale,fl_relative,l_sv-dev-assets:concord_filter,w_400,h_500,y_0/v1/sv-dev-stories/stories/42a9b15b-3574-4fd8-be11-f2c8b21d31c1.mp4",
};
