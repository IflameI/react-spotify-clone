import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { searchSongs } from '../redux/actions/songs';
import { useAppDispatch } from '../redux/typeHooks/hooks';

type HeaderType = {
  display_name?: string;
};

interface IHeaderInfo {
  user: HeaderType;
  token: any;
}

const Header: React.FC<IHeaderInfo> = ({ user, token }) => {
  let history = useHistory();

  const dispatch = useAppDispatch();

  const [valueSearch, setValueSearch] = useState<string>('');

  const onChangeSearch = (event: any) => {
    setValueSearch(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(searchSongs(valueSearch, token));
    history.push('/searchSongs');
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__left'>
            <div className='header__search'>
              <form onSubmit={handleSubmit}>
                <div className='header__form'>
                  <input
                    className='search__input'
                    type='text'
                    onChange={onChangeSearch}
                    value={valueSearch}
                    placeholder='Search'></input>
                  <button type='submit' className='header__search-icon'>
                    <img
                      src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-magnifier-6.png&r=255&g=255&b=255'
                      alt=''
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='header__right'>
            <div className='header__info'>{user.display_name}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
