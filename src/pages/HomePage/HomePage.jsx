import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Next from "../../components/Next/Next";
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";

function HomePage() {
  const { VideoId } = useParams();
  const [Videos, setVideos] = useState([]);
  const [VideoDetail, setVideoDetail] = useState(null);

  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [SelectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const getVideos = async () => {
    try {
      const response = await axios.get(
        "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=ff77e192-18c5-4d1e-922d-891738dd5880"
      );
      setVideos(response.data);
      setSelectedVideo(
        response.data.find((video) => video.id === VideoId) || response.data[0]
      );
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log("Error fetching videos", error);
    }
  };

  const getVideo = async () => {
    try {
      const response1 = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${SelectedVideo.id}?api_key=ff77e192-18c5-4d1e-922d-891738dd5880`
      );
      setVideoDetail(response1.data);
      console.log(response1.data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getVideos();
  }, [VideoId]);

  useEffect(() => {
    getVideo();
  }, [SelectedVideo]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const filteredVideos = Videos.filter(
    (video) => video.id !== SelectedVideo.id
  );
  console.log(SelectedVideo.id);
  console.log(filteredVideos);

  return (
    <>
      <Header />
      <Video video={SelectedVideo} />
      {/* <Description video={VideoDetail} /> */}
      {/* <Comments
        className="Section__comments"
        comments={JSON.stringify(VideoDetail).comment}
      /> */}
      <Next videosList={filteredVideos} handleVideoSelect={handleVideoSelect} />
    </>
  );
}

export default HomePage;
