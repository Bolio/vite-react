import { useState, useRef } from "react";
import styles from "./styles.module.css";

const SRC =
  "https://v16-webapp.tiktok.com/6e220df20f9bda02d2982ef697d9db80/622e878a/video/tos/useast2a/tos-useast2a-ve-0068c003/0ed0b01f41ff4312933359218b3ffc7d/?a=1988&br=1876&bt=938&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7ThDA4vDXq&l=2022031318082601019216806624249681&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampuNGc6ZnN3OzMzNzczM0ApM2lnOzc0N2U1NztnZjU4ZGdwcDVmcjRfbmlgLS1kMTZzczMyYGNgMS80Xi1iMDUzMl46Yw%3D%3D&vl=&vr=";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const video = useRef();
  const handlePlay = () => {
    if (playing) {
      video.current.pause();
    } else {
      video.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div>
      <video
        // autoPlay
        // muted
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay}></button>
    </div>
  );
}
