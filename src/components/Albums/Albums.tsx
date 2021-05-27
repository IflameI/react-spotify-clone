import React, { useEffect } from 'react';
import { AlbumsColumn } from '../../components';

interface IAlbums {
  token: string;
  onClickAlbum: (albumId: string) => any;
  songs: any;
}

const Albums: React.FC<IAlbums> = ({ onClickAlbum, songs }) => {
  return (
    <section className='albums recently'>
      <h1 className='recently__title content-main__title'>Albums</h1>
      <div className='recently__button'>
        <button className='btn-play'>PLAY</button>
      </div>
      <div className='albums__content'>
        <div className='albums__row'>
          {songs.map((obj: any, index: any) => (
            <AlbumsColumn onClickAlbum={onClickAlbum} key={index} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Albums;
