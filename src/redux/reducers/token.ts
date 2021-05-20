/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const initialState = {
  token: '',
};
type initialStateType = typeof initialState;

const tokenReducer = (state = initialState, action: any):initialStateType => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default tokenReducer;
