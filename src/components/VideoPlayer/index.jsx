import clsx from "clsx";
import { useState, useRef } from "react";
import styles from "./styles.module.css";
import VideoPlayerActions from "./VideoPlayerActions";

// const SRC =
//   "https://v16-webapp.tiktok.com/487057ab37214a87930458d8aeb3ac97/622fec33/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/5b297fea74044e928b69eef028966bb9/?a=1988&br=4168&bt=2084&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7ThPnMvDXq&l=20220314193013010189050041174DB589&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRobDk6ZnkzOzMzZjczM0ApNmY7PDplNGQ2Nzw2PDg2N2dnLWNicjRvNWlgLS1kMWNzc15fYWFeXjIvYGEtXmNhL2I6Yw%3D%3D&vl=&vr=";

export default function VideoPlayer({ src }) {
  const [playing, setPlaying] = useState(false);
  const video = useRef();
  const handlePlay = () => {
    const { current: videoEl } = video;
    playing ? videoEl.pause() : videoEl.play();

    setPlaying(!playing);
  };

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  return (
    <div className={styles.wrapper}>
      <video
        // autoPlay
        // muted
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions />
    </div>
  );
}
