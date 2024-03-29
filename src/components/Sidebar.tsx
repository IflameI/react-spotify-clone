import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      <ul className='sidebar__list'>
        <div className='sidebar__block'>
          <li>
            <NavLink exact to='/' activeClassName='sidebar__active'>
              Browse
            </NavLink>
          </li>
        </div>
        <div className='sidebar__block'>
          <h3 className='sidebar__title'>YOUR LIBRARY</h3>
          <li>
            <NavLink exact to='/songsList' activeClassName='sidebar__active'>
              Songs
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/albums' activeClassName='sidebar__active'>
              Albums
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/artists' activeClassName='sidebar__active'>
              Artists recommendations
            </NavLink>
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
