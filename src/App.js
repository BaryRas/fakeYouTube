import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { API_KEY } from "./api/api";
import { SearchBar, VideoList, VideoDetail } from "./components";

function App() {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  const handleSubmit = async Search => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: API_KEY,
        q: Search
      }
    });

    setVideo(response.data.items);
    setselectedVideo(response.data.items[0]);
  };

  const onVideoSelect = video => {
    setselectedVideo(video);
  };

  useEffect(() => {
    handleSubmit("react real project from scratch");
  }, []);

  return (
    <div className="App">
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12} style={{ backgroundColor: "#ccc" }}>
              <SearchBar onFormSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8} style={{ backgroundColor: "#ff0000" }}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4} style={{ backgroundColor: "#2dbfbf" }}>
              <VideoList videos={video} onVideoSelect={onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
