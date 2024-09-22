import "./Next.scss";

export default function Next({
  videosList,
  setSelectedVideo,
  handleVideoSelect,
}) {
  return (
    <>
      <h2 className="Next__title">NEXT VIDEOS</h2>
      <ul>
        {videosList.map((video) => {
          return (
            <>
              <img
                className="Next__image"
                src={video.image}
                alt=""
                Onclick={() => handleVideoSelect(video)}
              />
              <ul key={video.id}>
                <button
                  className="Next__button"
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="">
                    <h2 className="">{video.title}</h2>
                    <h3 className="">{video.channel}</h3>
                  </div>
                </button>
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
}
