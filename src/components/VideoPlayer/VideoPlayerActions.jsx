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

  const handleLike = () => {
    alert('like');
  }
  const handleComment = () => {
    alert('comment');
  }
  const handleShare = () => {
    alert('share');
  }
  
  return (
    <aside className={styles.actions}>
      <button className={styles.action} onClick={handleLike}>
        <Heart />
        <span title="like">{likes}</span>
      </button>

      <button className={styles.action} onClick={handleComment}>
        <Comment />
        <span title="comments">{comments}</span>
      </button>

      <button className={styles.action} onClick={handleShare}>
        <Share />
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
}
