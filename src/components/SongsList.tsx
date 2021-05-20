import React from 'react';

const SongsList: React.FC = () => {
  return (
    <section className='recently'>
      <h1 className='recently__title content-main__title'>Recently Played</h1>
      <div className='recently__button'>
        <button className='btn-play'>PLAY</button>
      </div>
      <div className='recently__table'>
        <table className='songs-playlist-item__table table-main'>
          <thead>
            <tr className='table-main__head'>
              <th className='table-main__title'>Title</th>
              <th className='table-main__title'>Artist</th>
              <th className='table-main__title'>Album</th>
              <th className='table-main__title'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'>
                  <path d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z' />
                </svg>
              </th>
              <th className='table-main__title'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'>
                  <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z' />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody className='table-main__body'>
            <tr>
              <td>They Want What We Want (And They Care)</td>
              <td>Asking Alexandria</td>
              <td>They Want What We Want (And They Care)</td>
              <td>2021-05-17</td>
              <td>3:15</td>
            </tr>
            <tr>
              <td>They Want What We Want (And They Care)</td>
              <td>Asking Alexandria</td>
              <td>They Want What We Want (And They Care)</td>
              <td>2021-05-17</td>
              <td>3:15</td>
            </tr>
            <tr>
              <td>They Want What We Want (And They Care)</td>
              <td>Asking Alexandria</td>
              <td>They Want What We Want (And They Care)</td>
              <td>2021-05-17</td>
              <td>3:15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SongsList;
