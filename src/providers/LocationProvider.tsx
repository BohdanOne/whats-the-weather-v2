import React, { useReducer } from 'react';
import { locationReducer, IState, IAction, initialState } from '../reducers/locationReducer';

interface ILocation {
  location: string;
  dispatch: React.Dispatch<IAction> | null;
}

export const LocationContext = React.createContext<ILocation>({ location: '', dispatch: null });

export const LocationProvider: React.FC<{children: React.ReactElement}> = ({ children }) => {
  const [location, dispatchLocation] = useReducer<React.Reducer<IState, IAction>>(locationReducer, initialState);

  return (
    <LocationContext.Provider value={{ location: location.location, dispatch: dispatchLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
