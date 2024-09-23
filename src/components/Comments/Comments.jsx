import "./Comments.scss";
import { convertTime } from "../Video/Video";

export default function Comments({ comments }) {
  return (
    <div className="Comments">
      <div className="Comments__top">
        <h3 className="Comments__title1">{comments.length} Comments</h3>
        <div className="Comments__form">
          <img
            className="Comments__icon"
            src="../../src/assets/images/Mohan-muruge.jpg"
            alt=""
          />
          <div className="Comments__right">
            <div className="Comments__right1">
              <h2 className="Comments__title">JOIN THE CONVERSATION</h2>
              <textarea
                className="Comments__box"
                name="comments__box"
                id=""
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <button className="Comments__button">
              <img src="../../src/assets/images/add_comment.svg" alt="" />
              COMMENT
            </button>
          </div>
        </div>

        <hr className="Divider" />
      </div>
      <ul>
        {comments.map((comment) => {
          return (
            <>
              <div className="Comments__sec">
                <div className="Comments__avatar"></div>
                <div className="Comments__section">
                  <div className="Comments__namedate">
                    <h3 className="Comments__name">{comment.name}</h3>
                    <h4 className="Comments__date">
                      {convertTime(comment.timestamp)}
                    </h4>
                  </div>
                  <p className="Comments__paragraph">{comment.comment}</p>
                </div>
              </div>
              <hr className="Divider" />
            </>
          );
        })}
      </ul>
    </div>
  );
}
