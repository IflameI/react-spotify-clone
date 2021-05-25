import React from 'react';
import { NavLink } from 'react-router-dom';

interface IContentColumn {
  images: any[];
  name: string;
  id: string;
  onClickAlbum: (albumId: string) => any;
}

const MainContentColumn: React.FC<IContentColumn> = ({ images, name, id, onClickAlbum }) => {
  return (
    <div onClick={() => onClickAlbum(id)} className='content-main__column'>
      <NavLink exact to='/playlistProfileItem'>
        <div className='content-main__item'>
          <div className='content-main__image'>
            <img src={images[0].url} alt={name}></img>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MainContentColumn;
