import React from 'react';
import { NavLink } from 'react-router-dom';

interface IArtists {
  name: string;
  images: any;
  onClickArtists: (albumId: string) => any;
  id: string;
}

const ArtistsColumn: React.FC<IArtists> = ({ name, images, onClickArtists, id }) => {
  return (
    <div onClick={() => onClickArtists(id)} className='artists__column'>
      <NavLink exact to='/artistsItem'>
        <div className='artists__item'>
          <div className='artists__img'>
            <img src={images[0].url} alt=''></img>
          </div>
          <div className='artists__name'>{name}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default ArtistsColumn;
