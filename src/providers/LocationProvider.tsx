import React, { useReducer } from 'react';
import { locationReducer, initialState } from '../reducers/locationReducer';
import { ILocationState, ILocationAction, ILocationContext } from '../types';

export const LocationContext = React.createContext<ILocationContext>({
  location: '',
  dispatch: null
});

export const LocationProvider: React.FC<{ children: React.ReactElement }> = ({
  children
}) => {
  const [location, dispatchLocation] = useReducer<
    React.Reducer<ILocationState, ILocationAction>
  >(locationReducer, initialState);

  return (
    <LocationContext.Provider
      value={{ location: location.location, dispatch: dispatchLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
