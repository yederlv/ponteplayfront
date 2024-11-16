import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// URL del backend
const BACKEND_URL = "https://ponteplay.onrender.com";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    // Obtener las canciones desde el backend
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/songs`);
        setQueue(response.data);
        if (response.data.length > 0) setCurrentSong(response.data[0]);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const playNextSong = () => {
    if (queue.length > 1) {
      setQueue((prevQueue) => prevQueue.slice(1));
      setCurrentSong(queue[1]);
    }
  };

  return (
    <PlayerContext.Provider value={{ currentSong, setCurrentSong, queue, playNextSong }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
