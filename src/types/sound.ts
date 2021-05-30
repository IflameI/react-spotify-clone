export enum soundActionType {
  UPDATE_VOLUME = 'UPDATE_VOLUME',
}

export interface updateVolumeActionType {
  type: soundActionType.UPDATE_VOLUME;
  payload: any;
}

export type soundActions = updateVolumeActionType;
