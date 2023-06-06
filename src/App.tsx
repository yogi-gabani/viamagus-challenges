import Login from "./components/Login/Login.tsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Date from "./components/Date/Date.tsx";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/video" element={<VideoPlayer />} />
      <Route path="/date" element={<Date />} />
    </Routes>
  )
}

export default App
