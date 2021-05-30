import React from 'react';
import { useAppSelector } from '../redux/typeHooks/hooks';

const Footer: React.FC = () => {
  const { songsDetail } = useAppSelector(({ songs }) => {
    return {
      songsDetail: songs.songDetails,
    };
  });

  return (
    <footer className='footer'>
      <div className='sidebar__img'>
        <img src={songsDetail.album.images[0].url} alt=''></img>
      </div>
      <div className='footer__row'>
        <div className='footer__column footer__column-info'>
          <div className='footer__item'>
            <div className='footer__info'>
              <div className='footer__song-name'>{songsDetail.name}</div>
              <div className='footer__artist-name'>{songsDetail.artists[0].name}</div>
            </div>
          </div>
        </div>
        <div className='footer__column footer__column-controls'>
          <div className='footer__item'></div>
        </div>
        <div className='footer__column footer__column-volume'>
          <div className='footer__item'></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
