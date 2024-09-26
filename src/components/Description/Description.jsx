import "./Description.scss";
import "../Video/Video.scss";
import { convertTime } from "../Video/Video";

export default function Description({ video }) {
  return (
    <div>
      <div className="Video__des">
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
      </div>
    </div>
  );
}
