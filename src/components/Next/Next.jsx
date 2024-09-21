import "./Next.scss";

export default function Next({ videosList, setSelectedVideo }) {
  return (
    <>
      <h2>NEXT VIDEOS</h2>
      <ul>
        {videosList.map((video) => {
          return (
            <>
              <img src={video.image} alt="" />
              <ul key={video.id}>
                <button onClick={() => setSelectedVideo(video)}>
                  {video.title}
                  {video.channel}
                </button>
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
}
