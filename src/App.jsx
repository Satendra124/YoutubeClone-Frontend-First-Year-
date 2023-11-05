import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Table1 from "./components/Table1";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/table" Component={Table1} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
