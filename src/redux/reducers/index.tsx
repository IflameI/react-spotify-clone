import token from './token';
import profile from './profile';
import playlist from './playlist';
import albums from './albums';
import songs from './songs';
import browse from './browse';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ token, profile, playlist, albums, songs, browse });

export default rootReducer;
