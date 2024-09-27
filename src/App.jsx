import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotfoundPage/NotfoundPage";

import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Next from "./components/Next/Next";
import Video from "./components/Video/Video";
import VideoData from "./data/video-details.json";
import Comments from "./components/Comments/Comments";

function App() {
  //console.log(VideoData);
  const [SelectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  const filteredVideos = VideoData.filter((video) => {
    return video.id !== SelectedVideo.id;
  });
  //console.log(filteredVideos);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/videos/:dynamic-part" element={<UploadPage />} /> */}
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Header />

      <Video video={SelectedVideo} />

      <div className="Section">
        <div className="Section__desktopdisplay">
          <Description video={SelectedVideo} />
          <Comments
            className="Section__comments"
            comments={SelectedVideo.comments}
          />
        </div>
        <Next
          videosList={filteredVideos}
          handleVideoSelect={handleVideoSelect}
        />
      </div>
    </>
  );
}

export default App;
