import React from 'react';
import { Calendar, TableSongs, Time } from '.';

interface ISongs {
  songs: any;
}

const SongsList: React.FC<ISongs> = ({ songs }) => {
  return (
    <section className='recently'>
      <h1 className='recently__title content-main__title'>Songs</h1>
      <div className='recently__button'>
        <button className='btn-play'>PLAY</button>
      </div>
      <table className='songs-playlist-item__table table-main'>
        <thead>
          <tr className='table-main__head'>
            <th className='table-main__title'>Title</th>
            <th className='table-main__title'>Artist</th>
            <th className='table-main__title'>Album</th>
            <th className='table-main__title'>
              <Calendar />
            </th>
            <th className='table-main__title'>
              <Time />
            </th>
          </tr>
        </thead>
        {songs.map((obj: any, index: any) => (
          <TableSongs key={index} {...obj} />
        ))}
      </table>
    </section>
  );
};

export default SongsList;
