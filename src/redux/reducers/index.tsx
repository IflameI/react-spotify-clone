import token from './token';
import profile from './profile';
import playlist from './playlist';
import albums from './albums';
import songs from './songs';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ token, profile, playlist, albums, songs });

export default rootReducer;
