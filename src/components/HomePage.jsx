import React from "react";
import VideoCard from "./VideoCard";

const HomePage = () => {
  return (
    <div className="main-flex-container">
      <div className="page">
        <div className="sidebar">
          <ul>
            <p>Home</p>
            <p>Shorts</p>
            <p>Subscriptions</p>
            <p>You</p>
            <p>History</p>
          </ul>
        </div>
        <div className="main">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
