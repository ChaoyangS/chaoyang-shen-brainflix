import "./Next.scss";

export default function Next({
  videosList,
  setSelectedVideo,
  handleVideoSelect,
}) {
  return (
    <div className="Next">
      <h2 className="Next__title">NEXT VIDEOS</h2>

      <div className="Next__list">
        <ul className="Next__ul">
          {videosList.map((video) => {
            return (
              <div className="Next__section">
                <img className="Next__image" src={video.image} alt="" />
                {/* <ul key={video.id}> */}
                <div
                  className="Next__button"
                  onClick={() => handleVideoSelect(video)}
                >
                  <h3 className="Next__name">{video.title}</h3>
                  <h3 className="Next__channel">{video.channel}</h3>
                </div>
                {/* </ul> */}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
