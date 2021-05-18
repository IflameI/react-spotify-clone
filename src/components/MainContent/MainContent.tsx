import React from 'react';
import { MainContentColumn } from '..';

const MainContent = () => {
  return (
    <>
      <h1 className='content-main__title'>Browse</h1>
      <div className='content-main__filter'>
        <ul className='content-main__filter-list'>
          <li>Genres</li>
          <li>New Releases</li>
          <li className='content-main__filter-active'>Featured</li>
        </ul>
      </div>
      <div className='content-main__row'>
        <MainContentColumn />
        <MainContentColumn />
        <MainContentColumn />
        <MainContentColumn />
        <MainContentColumn />
      </div>
    </>
  );
};

export default MainContent;
