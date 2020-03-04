import React from 'react';
import { ILocationState, ILocationAction, TSetLocation } from '../types';

const SET_LOCATION: TSetLocation = 'SET_LOCATION';
export const initialState: ILocationState = {
  location: '',
  dispatch: null
}

export const locationReducer: React.Reducer<ILocationState, ILocationAction> = (state, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};