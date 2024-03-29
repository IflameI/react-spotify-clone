import React from 'react';

interface ISongs {
  duration_ms: number;
  name: string;
  artists: any;
  audioControl: (song: any) => any;
  album: any;
}

const TableSongs: React.FC<ISongs> = ({ duration_ms, name, artists, album, audioControl }) => {
  const songDuration = duration_ms;
  const msToMinutesAndSeconds = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds: any = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };
  return (
    <tbody className='table-main__body'>
      <tr onClick={audioControl}>
        <td>{name}</td>
        <td>{artists[0].name}</td>
        <td>{name}</td>
        <td>{msToMinutesAndSeconds(songDuration)}</td>
      </tr>
    </tbody>
  );
};

export default TableSongs;
