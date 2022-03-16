import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
  {
    id: 1,
    author: "algúnautor",
    description:
      "Cuando esta todo el día en el Cel @webyurem #trend #foryou #novios #dance #fyp",
    likes: 19,
    shares: 41,
    comments: 177,
    songTitle: "Sexy And I Know It - LMFAO",
    albumCover:
      "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0d5a0b936d984cc8a83f0d2c1ff7cccf~c5_200x200.jpeg",
    src: "https://v16-webapp.tiktok.com/b4daf9fb9e98476580b4cad3d49ffb0f/6231b969/video/tos/maliva/tos-maliva-ve-0068c799-us/af277643dd26484eadd46e86f55ece2b/?a=1988&br=3130&bt=1565&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Th-OYiDXq&l=2022031604172001022307813810010C27&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M21uajo6ZjdpOzMzZzczNEApZ2hoODloZGVpN2U8ODo8NWdscDVrcjRnL2JgLS1kMS9zczYvM2BiMjItMjQxMjAwXjQ6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 2,
    author: "algúnautor-2",
    description: "Otra cosa de descripción 2",
    likes: 78,
    shares: 4,
    comments: 21,
    songTitle: "Sexy And I Know It - LMFAO",
    albumCover:
      "https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/0d5a0b936d984cc8a83f0d2c1ff7cccf~c5_200x200.jpeg",
    src: "https://v16-webapp.tiktok.com/b4daf9fb9e98476580b4cad3d49ffb0f/6231b969/video/tos/maliva/tos-maliva-ve-0068c799-us/af277643dd26484eadd46e86f55ece2b/?a=1988&br=3130&bt=1565&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CMnz7Th-OYiDXq&l=2022031604172001022307813810010C27&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M21uajo6ZjdpOzMzZzczNEApZ2hoODloZGVpN2U8ODo8NWdscDVrcjRnL2JgLS1kMS9zczYvM2BiMjItMjQxMjAwXjQ6Yw%3D%3D&vl=&vr=",
  },
];

export default function FeedVideos() {
  return VIDEOS.map((video) => (
    <div key={video.id} className={styles.item}>
      <VideoPlayer {...video} />
    </div>
  ));
}
