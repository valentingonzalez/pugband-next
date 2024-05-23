'use client';

import React, { useState } from 'react';
import CoverArt from './cover-art';

const CoverArts = () => {
  const [songs] = useState([
    {
      label: 'La oscuridad del placer',
      cover: '/assets/img/cover-laoscuridad.webp',
      spotify: 'https://open.spotify.com/track/04LnYBOwtrHIifkgasN4vA?si=c33e4736fe0045a8',
      applemusic: 'https://music.apple.com/us/album/la-oscuridad-del-placer-single/1728330745',
      youtube: 'https://www.youtube.com/watch?v=kkhGMS3pT9I',
      layout: ''
    },
    {
      label: 'Tiempo',
      cover: '/assets/img/cover-tiempo.webp',
      spotify: 'https://open.spotify.com/track/79GSFOBW9lgChMZ7XUAu2o?si=4778c29174f547da',
      applemusic: 'https://music.apple.com/us/album/tiempo-single/1717888536',
      youtube: 'https://www.youtube.com/watch?v=NBkwOtCaj_s',
      layout: ''
    }
  ]);

  return (
    <div className="container section cover-arts">
      <div className="row">
        {songs.map((song, i) => 
          <CoverArt
            key={i}
            align={(i + 1) % 2 == 0 ? 'right' : 'left'}
            className="mb-5"
            cover={song.cover}
            spotify={song.spotify}
            applemusic={song.applemusic}
            youtube={song.youtube}
            layout={song.layout}
          />
        )}
      </div>
    </div>
  )
}

export default CoverArts;