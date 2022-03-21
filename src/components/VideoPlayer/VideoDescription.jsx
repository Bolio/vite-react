import AlbumDisk from "./AlbumDisk";
import styles from "./styles.module.css";

export default function VideoDescription({ albumImage, author, description }) {
  return (
    <footer className={styles.description}>
      <div>
        <strong>{author}</strong>
        <p>{description}</p>
      </div>
      <div>
        <AlbumDisk albumImage={albumImage}/>
      </div>
    </footer>
  );
}
