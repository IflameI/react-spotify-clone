import React from 'react';

interface ISongs {
  duration_ms: any;
  name: any;
  artists: any;
  album: any;
  audioControl: (song: any) => any;
}

const TableSongs: React.FC<ISongs> = ({ duration_ms, name, artists, album }) => {
  const songDuration = duration_ms;
  const msToMinutesAndSeconds = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds: any = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };
  return (
    <tbody className='table-main__body'>
      <tr>
        <td>{name}</td>
        <td>{artists[0].name}</td>
        <td>{album.name}</td>
        <td>{album.release_date}</td>
        <td>{msToMinutesAndSeconds(songDuration)}</td>
      </tr>
    </tbody>
  );
};

export default TableSongs;
