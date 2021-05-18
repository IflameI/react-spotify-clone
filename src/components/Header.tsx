import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__left'>
            <div className='header__search'>
              <input className='search__input' type='text' placeholder='Search'></input>
            </div>
          </div>
          <div className='header__right'>
            <div className='header__info'>Iflamei</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
