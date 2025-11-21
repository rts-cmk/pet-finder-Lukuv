import { Routes, Route, Link } from "react-router";
import "./App.sass";
import HomePage from "./HomePage";
import Detail from "./Detail";
import Chat from "./Chat";
import Liked from "./Liked";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
