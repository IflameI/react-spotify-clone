import React, { useEffect } from 'react';
import { ArtistsColumn } from '..';
import { fetchArtists } from '../../redux/actions/artists';
import { useAppDispatch, useAppSelector } from '../../redux/typeHooks/hooks';

interface IArtist {
  token: string;
  songs: any;
  onClickArtists: (albumId: string) => any;
}

const Artists: React.FC<IArtist> = ({ token, songs, onClickArtists }) => {
  const dispatch = useAppDispatch();

  const { artistList, fetchArtistsPending } = useAppSelector(({ artists }) => {
    return {
      artistList: artists.artistList.artists,
      fetchArtistsPending: artists.fetchArtistsPending,
    };
  });
  useEffect(() => {
    dispatch(fetchArtists(songs[0].track.artists[0].id, token));
  }, []);
  return (
    <section className='artists recently'>
      <h1 className='recently__title content-main__title'>Artists</h1>
      <div className='artists__content'>
        <div className='artists__row'>
          {fetchArtistsPending ? (
            <div>Loader</div>
          ) : (
            artistList.map((obj: any) => (
              <ArtistsColumn onClickArtists={onClickArtists} key={obj.id} {...obj} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Artists;
