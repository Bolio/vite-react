import { Heart } from "../Icons/Heart.jsx";
import { Comment } from "../Icons/Comment.jsx";
import { Share } from "../Icons/Share.jsx";
import styles from "./styles.module.css";

export default function VideoPlayerActions({
  likes = 4723,
  comments = 527,
  shares = 73,
  hearted = false,
}) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title="like">{likes}</strong>
      </div>

      <div className={styles.action}>
        <Comment />
        <strong title="comments">{comments}</strong>
      </div>

      <div className={styles.action}>
        <Share />
        <strong title="shares">{shares}</strong>
      </div>
    </aside>
  );
}
