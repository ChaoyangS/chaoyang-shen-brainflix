import "./Upload.scss";
import { Link } from "react-router-dom";

function Upload() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <div className="Upload">
      <hr />
      <h1 className="">Upload Video</h1>
      <hr />
      <h3 className="Upload__title">VIDEO THUMBNAIL</h3>

      <img
        className="Upload__thumbnail"
        src="src/assets/images/Upload-video-preview.jpg"
        alt=""
      />
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="Upload__title">
            TITLE YOUR VIDEO
            <input
              className=""
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
          </label>
          <label className="Upload__title">
            ADD A VIDEO DESCRIPTION
            <input
              className=""
              type="text"
              name="description"
              placeholder="Add a description to your video"
            />
          </label>
        </div>
        <hr />
        <div>
          <Link className="Upload__button" to="/">
            <button className="Upload__button">PUBLISH</button>{" "}
          </Link>
          <button className="">CANCEL</button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
