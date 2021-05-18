import React from 'react';
import { AlbumsColumn } from '../../components';

const Albums = () => {
  return (
    <section className='albums recently'>
      <h1 className='recently__title content-main__title'>Albums</h1>
      <div className='recently__button'>
        <button className='btn-play'>PLAY</button>
      </div>
      <div className='albums__content'>
        <div className='albums__row'>
          <AlbumsColumn />
          <AlbumsColumn />
          <AlbumsColumn />
          <AlbumsColumn />
          <AlbumsColumn />
          <AlbumsColumn />
        </div>
      </div>
    </section>
  );
};

export default Albums;
