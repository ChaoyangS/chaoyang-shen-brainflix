import "./Comments.scss";
import { convertTime } from "../Video/Video";

export default function Comments({ comments }) {
  return (
    <>
      <h3>{comments.length} Comments</h3>
      <img
        className="Comments__icon"
        src="../../src/assets/images/Mohan-muruge.jpg"
        alt=""
      />
      <h2 className="Comments__title">JOIN THE CONVERSATION</h2>
      <textarea
        className="Comments_box"
        name="comments__box"
        id=""
        placeholder="Add a new comment"
      ></textarea>
      <button className="Comments__button">
        <img src="../../src/assets/images/add_comment.svg" alt="" />
        COMMENT
      </button>
      <hr className="Divider" />
      <ul>
        {comments.map((comment) => {
          return (
            <>
              <img src="" alt="" />
              <h2>{comment.name}</h2>
              <h3>{convertTime(comment.timestamp)}</h3>
              <p>{comment.comment}</p>
            </>
          );
        })}
      </ul>
    </>
  );
}
