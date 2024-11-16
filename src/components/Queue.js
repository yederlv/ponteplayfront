import React from "react";
import { usePlayer } from "../context/PlayerContext";

const Queue = () => {
  const { queue, setCurrentSong } = usePlayer();

  return (
    <div className="queue">
      <h3>Up Next</h3>
      <ul>
        {queue.map((song, index) => (
          <li key={index} onClick={() => setCurrentSong(song)}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Queue;
