import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
