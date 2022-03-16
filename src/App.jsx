import { useState } from "react";
// import logo from './logo.svg'
import "./App.css";
import FeedVideos from "./components/FeedVideos/index.jsx";
// import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <main>
        {/* <VideoPlayer /> */}
        <FeedVideos />
      </main>
    </div>
  );
}

export default App;
