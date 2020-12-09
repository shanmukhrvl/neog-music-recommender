import React, { useState } from "react";
import "./styles.css";
import { musicDatabase } from "./database.js";

let genreList = Object.keys(musicDatabase);

export default function App() {
  const [selectedGenre, setGenre] = useState("POP");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="music-emoji">
          🎵
        </span>
        goodmusic
      </h1>

      <p>
        Checkout my favourite music. Select a genre to get started{" "}
        <span role="img" aria-label="headphone-emoji">
          🎧
        </span>
      </p>

      <div>
        {genreList.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="btn-genre"
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDatabase[selectedGenre].map((music) => (
            <li key={music.title} className="songs-list">
              <div className="player-container">
                <iframe
                  title={music.title}
                  src={music.link}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
                <p>{music.rating}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <figure>
        <blockquote>
          “Music gives a soul to the universe, wings to the mind, flight to the
          imagination, and life to everything.”
        </blockquote>
        <figcaption> – Plato</figcaption>
      </figure>

      <footer>
        <p>
          <a href="https://shanmukhrvl.netlify.app/">
            &lt;/&gt; by Shanmukh Ravella
          </a>
        </p>
      </footer>
    </div>
  );
}
