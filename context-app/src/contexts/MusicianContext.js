import React, { createContext, useState } from "react";

export const MusicianContext = createContext();

const MusicianContextProvider = props => {
  const artist = [
    { artist: "Nirvana", id: 1 },
    { artist: "Audioslave", id: 2 },
    { artist: "Pearl Jam", id: 3 },
    { artist: "Iron Maiden", id: 4 },
    { artist: "Imagine Dragons", id: 5 },
    { artist: "Incubus", id: 6 }
  ];

  const [musics, setMusics] = useState(artist);

  return (
    <MusicianContext.Provider value={{ musics }}>
      {props.children}
    </MusicianContext.Provider>
  );
};

export default MusicianContextProvider;
