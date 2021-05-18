import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__row'>
        <div className='footer__column footer__column-info'>
          <div className='footer__item'>
            <div className='footer__info'>
              <div className='footer__song-name'>Your Body Is a Wonderland</div>
              <div className='footer__artist-name'>John Mayer</div>
            </div>
          </div>
        </div>
        <div className='footer__column footer__column-controls'>
          <div className='footer__item'>
            <div className='footer__controls'>
              <button className='footer__song-reserve'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'>
                  <path d='M22 12l-20 12 7.289-12-7.289-12z' />
                </svg>
              </button>
              <button className='footer__play'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'>
                  <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z' />
                </svg>
              </button>
              <button className='footer__song-next'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                  <path d='M22 12l-20 12 7.289-12-7.289-12z' />
                </svg>
              </button>
            </div>
            <div className='footer__progress'>
              <p className='footer__timer-start'>0:00</p>
              <div className='footer__song-progress'>
                <div className='footer__song-expired' style={{ width: '0px' }}></div>
              </div>
              <p className='footer__timer-end'>0:30</p>
            </div>
          </div>
        </div>
        <div className='footer__column footer__column-volume'>
          <div className='footer__item'>
            <div className='footer__volume'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'>
                  <path d='M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm17 4h-5v2h5v-2zm-1.584-6.232l-4.332 2.5 1 1.732 4.332-2.5-1-1.732zm1 12.732l-4.332-2.5-1 1.732 4.332 2.5 1-1.732z' />
                </svg>
              </span>
              <input
                type='range'
                min='0'
                max='100'
                className='footer__item-volume'
                value='100'></input>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
