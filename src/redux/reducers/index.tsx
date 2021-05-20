import token from './token';
import profile from './profile';
import playlist from './playlist';
import albums from './albums';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ token, profile, playlist, albums });

export default rootReducer;
