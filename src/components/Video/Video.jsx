import "./Video.scss";

export default function Video({ video }) {
  return (
    <>
      <img src={video.image} alt="" />
      <img src="../../src/assets/images/play.svg" alt="" />
      <img src="../../src/assets/images/scrub.svg" alt="" />
      <img src="../../src/assets/images/fullscreen.svg" alt="" />
      <img src="../../src/assets/images/volume_up.svg" alt="" />

      <h1>{video.title}</h1>
      <hr />
      <h3>By {video.channel}</h3>
      <h4>{video.timestamp}</h4>
      <img src="../../src/assets/images/views.svg" alt="" />
      <h4>{video.views}</h4>
      <img src="../../src/assets/images/likes.svg" alt="" />
      <h4>{video.likes}</h4>
      <hr />
      <p>{video.description}</p>
    </>
  );
}
