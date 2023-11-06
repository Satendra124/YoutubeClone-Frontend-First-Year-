import React from "react";
import SuggestionCard from "./SuggestionCard";

const VideoPage = () => {
  return (
    <div className="videoPage">
      <div className="videoItem">
        <iframe
          className="iframe-video"
          src="https://www.youtube.com/embed/iSo9l950QLo?si=qdWCRT_ALWXx-8x_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className="description">
          <img className="channelImage" src="https://robohash.org/20" alt="" />

          <div className="channelText">
            <p>Channel Name</p>
            <p>293K</p>
          </div>

          <button className="subscribe-button">Subscribe</button>
        </div>

        <br />

        <div className="description-text">
          <p>
            <b>92K views 5 months ago</b>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className="suggestionBar">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </div>
  );
};

export default VideoPage;
