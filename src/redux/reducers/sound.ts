/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {} from '../../types/songs';
import { soundActions, soundActionType } from '../../types/sound';

const initialState = {
  volume: 100,
};
type initialStateType = typeof initialState;

const songs = (state = initialState, action: soundActions): initialStateType => {
  switch (action.type) {
    case soundActionType.UPDATE_VOLUME:
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default songs;
