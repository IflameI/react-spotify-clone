/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import axios from 'axios'

export const setToken = (payload:any) => ({
    type: 'SET_TOKEN',
    payload,
  });


