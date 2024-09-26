import "./Video.scss";

export function convertTime(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export default function Video({ video }) {
  return (
    <>
      <div className="Video__section">
        <video className="Video__image" controls poster={video.image}>
          <source src="{video.video}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <div className="Video__des">
        <h1 className="Video__title">{video.title}</h1>
        <hr className="Divider Divider1" />
        <div className="Video__sub">
          <div className="Video__author">
            <h3 className="Video__channel">By {video.channel}</h3>
            <h4 className="Video__time">{convertTime(video.timestamp)}</h4>
          </div>
          <div className="Video__viewlike">
            <div className="Video__views">
              <img
                className="Video__viewsicon"
                src="../../src/assets/images/views.svg"
                alt=""
              />
              <h4 className="Video__viewstitle">{video.views}</h4>
            </div>
            <div className="Video__likes">
              <img
                className="Video__likesicon"
                src="../../src/assets/images/likes.svg"
                alt=""
              />
              <h4 className="Video__likestitle">{video.likes}</h4>
            </div>
          </div>
        </div>
        <hr className="Divider" />
        <p className="Video__description">{video.description}</p>
      </div> */}
    </>
  );
}
