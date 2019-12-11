import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

import "./SongList.css";
import NewSongForm from "../NewSongForm/NewSongForm";

const SongList = () => {
  const songTitles = [
    { title: "Natural", id: 1 },
    { title: "Smells Like Teen Spirit", id: 2 },
    { title: "Black", id: 3 },
    { title: "Fear of the Dark", id: 4 },
    { title: "Whatever it Takes", id: 5 },
    { title: "Walk on the Water", id: 6 }
  ];
  const [songs, setSongs] = useState(songTitles);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("The list of songs changed...");
  }, [songs]);

  return (
    <section className="songList">
      <ul className="listSongs">
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </section>
  );
};

export default SongList;
