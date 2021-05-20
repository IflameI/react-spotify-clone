import React from 'react';
import { NavLink } from 'react-router-dom';

const MainContentColumn: React.FC = () => {
  return (
    <div className='content-main__column'>
      <NavLink exact to='/playlistItem'>
        <div className='content-main__item'>
          <div className='content-main__image'>
            <img
              src='https://i.scdn.co/image/ab67706f00000003f8e1cf45ec2e9a50256e2058'
              alt=''></img>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MainContentColumn;
