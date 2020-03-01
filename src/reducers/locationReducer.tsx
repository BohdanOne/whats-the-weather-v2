import React from 'react';

export interface IState {
  location: string;
  dispatch: React.Dispatch<IAction> | null;
}

export interface IAction {
  type: 'SET_LOCATION';
  payload: string;
}

export const initialState: IState = {
  location: '',
  dispatch: null
}

export const locationReducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload };
    default:
      return state;
  }
};