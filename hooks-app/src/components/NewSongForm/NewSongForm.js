import React, { useState } from "react";

import "./NewSongForm.css";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };

  return (
    <form className="songForm" onSubmit={handleSubmit}>
      <label className="songLabel">Song name:</label>
      <input
        className="songInput"
        type="text"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        required
      />
      <input className="songButton" type="submit" value="Add song" />
    </form>
  );
};

export default NewSongForm;
