import React from 'react';
import { NavLink } from 'react-router-dom';

const AlbumsColumn = () => {
  return (
    <div className='albums__column'>
      <NavLink exact to='/playlistItem' activeClassName='sidebar__active'>
        <div className='albums__item'>
          <div className='albums__img'>
            <img
              src='https://i.scdn.co/image/ab67616d0000b27314be855a9035c9154ee6970c'
              alt=''></img>
          </div>
          <div className='albums__title'>They Want What We Want And They Care</div>
          <div className='albums__artist'>Asking Alexandria</div>
        </div>
      </NavLink>
    </div>
  );
};

export default AlbumsColumn;
