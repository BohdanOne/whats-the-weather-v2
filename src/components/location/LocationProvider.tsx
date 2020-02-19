import React, { useReducer, ReactElement } from 'react';
import { locationReducer, IState, IAction, initialState } from './locationReducer';

interface ILocationProviderProps {
  children: ReactElement;
}

interface ILocation {
  location: string;
  dispatch: React.Dispatch<IAction> | null;
}

export const LocationContext = React.createContext<ILocation>({ location: '', dispatch: null });

export const LocationProvider: React.FC<ILocationProviderProps> = ({ children }) => {
  const [location, dispatchLocation] = useReducer<React.Reducer<IState, IAction>>(locationReducer, initialState);

  return (
    <LocationContext.Provider value={{ location: location.location, dispatch: dispatchLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
