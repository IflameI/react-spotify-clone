import React from 'react';

interface ISongs {
  track: any;
  audioControl: (song: any) => any;
}

const TableSearchSongs: React.FC<ISongs> = ({ track, audioControl }) => {
  const songDuration = track.duration_ms;
  const msToMinutesAndSeconds = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds: any = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };
  return (
    <tbody className='table-main__body'>
      <tr
        onClick={() => {
          audioControl(track);
        }}>
        <td>{track.name}</td>
        <td>{track.artists[0].name}</td>
        <td>{track.album.name}</td>
        <td>{track.album.release_date}</td>
        <td>{msToMinutesAndSeconds(songDuration)}</td>
      </tr>
    </tbody>
  );
};

export default TableSearchSongs;
