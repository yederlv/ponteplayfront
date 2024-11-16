import React from "react";
import { usePlayer } from "../context/PlayerContext";

const Header = () => {
  const { currentSong } = usePlayer();

  return (
    <div className="header">
      {currentSong ? (
        <img src={`http://localhost:5000${currentSong.albumCover}`} alt="Album Cover" className="album-cover" />
      ) : (
        <p>Select a song to start!</p>
      )}
    </div>
  );
};

export default Header;
