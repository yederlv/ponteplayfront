import React from "react";
import { usePlayer } from "../context/PlayerContext";

const Description = () => {
  const { currentSong } = usePlayer();

  return (
    <div className="description">
      {currentSong ? (
        <>
          <h2>{currentSong.title}</h2>
          <p>{`Artista: ${currentSong.artist}`}</p>
          <p>{`Genero: ${currentSong.genre}`}</p>
        </>
      ) : (
        <p>No song is currently playing.</p>
      )}
    </div>
  );
};

export default Description;
