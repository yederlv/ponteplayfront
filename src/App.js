import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Player from "./components/Player";
import Queue from "./components/Queue";
import { PlayerProvider } from "./context/PlayerContext";
import "./styles/global.css";

const App = () => {
  return (
    <PlayerProvider>
      <div className="app">
        <Header />
        <Description />
        <Player />
        <Queue />
      </div>
    </PlayerProvider>
  );
};

export default App;
