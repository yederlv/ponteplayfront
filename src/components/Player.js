import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { usePlayer } from "../context/PlayerContext";

const Player = () => {
  const { currentSong, playNextSong } = usePlayer();
  const playerRef = useRef(null);

  const handleEnd = () => {
    playNextSong();
  };

  return (
    <div className="player">
      {currentSong ? (
        <ReactPlayer
          ref={playerRef}
          url={`https://ponteplay.onrender.com${currentSong.url}`}
          playing={true}
          controls
          onEnded={handleEnd}
          width="100%"
          height="50px"
        />
      ) : (
        <p>No song playing</p>
      )}
    </div>
  );
};

export default Player;
