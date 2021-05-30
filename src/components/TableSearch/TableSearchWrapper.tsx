import React from 'react';
import { Calendar, TableSearchSongs, TableSongs, Time } from '../';

interface ISongs {
  songsSearch: any;
  searchSongsPending: any;
  audioControl: (song: any) => any;
}

const TableSearchWrapper: React.FC<ISongs> = ({
  songsSearch,
  searchSongsPending,
  audioControl,
}) => {
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
        {searchSongsPending ? (
          <div>Loader</div>
        ) : (
          songsSearch.map((obj: any) => (
            <TableSearchSongs audioControl={audioControl} key={obj.id} {...obj} />
          ))
        )}
      </table>
    </section>
  );
};

export default TableSearchWrapper;
