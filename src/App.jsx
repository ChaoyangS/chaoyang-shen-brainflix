import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Next from "./components/Next/Next";
import Video from "./components/Video/Video";
import VideoData from "./data/video-details.json";
import Comments from "./components/Comments/Comments";

function App() {
  console.log(VideoData);
  const [SelectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const filteredVideos = VideoData.filter((video) => {
    return video.id !== SelectedVideo.id;
  });
  console.log(filteredVideos);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:dynamic-part" element={<VideoDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Video video={SelectedVideo} />
      <Comments comments={SelectedVideo.comments} />
      <Next videosList={filteredVideos} />
    </>
  );
}

export default App;
