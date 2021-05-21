import React, { useEffect } from 'react';
import { Calendar, TableSongs, Time } from '.';
import { fetchSongs } from '../redux/actions/songs';
import { useAppDispatch, useAppSelector } from '../redux/typeHooks/hooks';

interface ISongs {
  token: string;
}

const SongsList: React.FC<ISongs> = ({ token }) => {
  const dispatch = useAppDispatch();

  const { songs, fetchSongsPending } = useAppSelector(({ songs }) => {
    return {
      songs: songs.songs.items,
      fetchSongsPending: songs.fetchSongsPending,
    };
  });
  useEffect(() => {
    dispatch(fetchSongs(token));
  }, []);

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
        {fetchSongsPending ? (
          <div>Loader</div>
        ) : (
          songs.map((obj, index) => <TableSongs key={index} {...obj} />)
        )}
      </table>
    </section>
  );
};

export default SongsList;
