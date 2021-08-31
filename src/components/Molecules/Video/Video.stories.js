import React from "react"
import Video from "./Video";

export default {
  title: "Common Components/Molecules/Video",
  component: Video,
  argTypes: {
    "popUp": {
      type: "boolean",
      name: "Pop Up"
    },
    "videoId": {
      name: "Video Id"
    }
  }
}

const VideoTemplate = (args) => <Video {...args} />

export const PrimaryVideo = VideoTemplate.bind({});
PrimaryVideo.args = {
  videoId: "nW9piCiWPZU",
  popUp: true,
  // thumbnail: "https://picsum.photos/320/180?random=1"
}
