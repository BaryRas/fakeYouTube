import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ videos, onVideoSelect }) => {
  const listVideo = videos.map((video, id) => {
    return <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />;
  });
  return (
    <Grid container spacing={10}>
      {listVideo}
    </Grid>
  );
};

export default VideoList;
