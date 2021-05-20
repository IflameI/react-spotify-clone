import token from './token';
import profile from './profile';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ token, profile });

export default rootReducer;
