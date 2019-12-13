import React, { useContext } from "react";

import "./Musician.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MusicianContext } from "../../contexts/MusicianContext";

const Musician = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { musics } = useContext(MusicianContext);

  return (
    <section
      className="musicList"
      style={{ background: theme.bg, color: theme.text }}
    >
      <ul className="musicListList">
        {musics.map(music => {
          return (
            <li
              key={music.id}
              className="musicListItem"
              style={{ background: theme.ui }}
            >
              {music.artist}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Musician;
