import React from 'react';
import { MainContentColumn } from '..';

interface IContent {
  view: any[];
  isLoaded: boolean;
  onClickPlaylist: (albumId: string) => any;
}
const MainContent: React.FC<IContent> = ({ view, isLoaded, onClickPlaylist }) => {
  return (
    <>
      <h1 className='content-main__title'>Browse</h1>
      <div className='content-main__row'>
        {isLoaded ? (
          view.map((obj: any) => (
            <MainContentColumn onClickPlaylist={onClickPlaylist} key={obj.id} {...obj} />
          ))
        ) : (
          <div>Loader</div>
        )}
      </div>
    </>
  );
};

export default MainContent;
