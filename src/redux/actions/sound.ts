import { soundActions, soundActionType } from '../../types/sound';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const volumeUpdate = (payload: any): soundActions => {
  return {
    type: soundActionType.UPDATE_VOLUME,
    payload,
  };
};
