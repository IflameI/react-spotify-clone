import React from 'react';
import { NavLink } from 'react-router-dom';

interface IContentColumn {
  images: any[];
  name: string;
}

const MainContentColumn: React.FC<IContentColumn> = ({ images, name }) => {
  return (
    <div className='content-main__column'>
      <NavLink exact to='/playlistItem'>
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
