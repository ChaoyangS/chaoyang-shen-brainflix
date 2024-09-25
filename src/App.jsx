import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Next from "./components/Next/Next";
import Video from "./components/Video/Video";
import VideoData from "./data/video-details.json";
import Comments from "./components/Comments/Comments";

function App() {
  console.log(VideoData);
  const [SelectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  const filteredVideos = VideoData.filter((video) => {
    return video.id !== SelectedVideo.id;
  });
  console.log(filteredVideos);
  return (
    <>
      <Header />

      <Video video={SelectedVideo} />
      <div className="Section">
        <Comments
          className="Section__comments"
          comments={SelectedVideo.comments}
        />
        <Next
          videosList={filteredVideos}
          handleVideoSelect={handleVideoSelect}
        />
      </div>
    </>
  );
}

export default App;
