import React from 'react';
import { MainContentColumn } from '..';

interface IContent {
  view: any;
  isLoaded: boolean;
}

const MainContent: React.FC<IContent> = ({ view, isLoaded }) => {
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
        {isLoaded ? (
          view.map((obj: any) => <MainContentColumn key={obj.id} {...obj} />)
        ) : (
          <div>Loader</div>
        )}
      </div>
    </>
  );
};

export default MainContent;
