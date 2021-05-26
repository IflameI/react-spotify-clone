import React, { useEffect } from 'react';
import { AlbumsColumn } from '../../components';
import { fetchSongs } from '../../redux/actions/songs';
import { useAppDispatch, useAppSelector } from '../../redux/typeHooks/hooks';

interface IAlbums {
  token: string;
  onClickAlbum: (albumId: string) => any;
}

const Albums: React.FC<IAlbums> = ({ token, onClickAlbum }) => {
  const dispatch = useAppDispatch();

  const { songs, fetchAlbumsPending } = useAppSelector(({ songs, albums }) => {
    return {
      songs: songs.songs.items,
      fetchAlbumsPending: albums.fetchAlbumsPending,
    };
  });
  useEffect(() => {
    dispatch(fetchSongs(token));
  }, []);

  return (
    <section className='albums recently'>
      <h1 className='recently__title content-main__title'>Albums</h1>
      <div className='recently__button'>
        <button className='btn-play'>PLAY</button>
      </div>
      <div className='albums__content'>
        <div className='albums__row'>
          {fetchAlbumsPending ? (
            <div className='info-playlist__title'>Loader</div>
          ) : (
            songs.map((obj, index) => (
              <AlbumsColumn onClickAlbum={onClickAlbum} key={index} {...obj} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Albums;
