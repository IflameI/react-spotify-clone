import React from 'react';
import { NavLink } from 'react-router-dom';

interface IAlbums {
  track: any;
  onClickAlbum: (albumId: string) => any;
}

const AlbumsColumn: React.FC<IAlbums> = ({ track, onClickAlbum }) => {
  return (
    <div onClick={() => onClickAlbum(track.album.id)} className='albums__column'>
      <NavLink exact to='/albumProfileItem' activeClassName='sidebar__active'>
        <div className='albums__item'>
          <div className='albums__img'>
            <img src={track.album.images[0].url} alt=''></img>
          </div>
          <div className='albums__title'>{track.album.name}</div>
          <div className='albums__artist'>{track.artists[0].name}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default AlbumsColumn;
