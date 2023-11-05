import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-flex-container">
      <div className="navbar">
        <p>YOUTUBE</p>
        <input className="searchBar" placeholder="  Search..." />
        <button className="signInButton">Sign In</button>
      </div>

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
          <img
            className="thumbnail"
            src="../src/assets/Thumbnail.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
