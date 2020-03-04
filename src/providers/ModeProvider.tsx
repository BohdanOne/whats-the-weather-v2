import React, { useReducer } from 'react';
import modeReducer from '../reducers/modeReducer';
import { Modes, IModeContext } from '../types';

const LIGHT = Modes.light;
const DARK = Modes.dark;

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const DEFAULT_MODE: Modes = isDark ? DARK : LIGHT;

export const ModeContext = React.createContext<IModeContext>({mode: DEFAULT_MODE, changeMode: null});

export const ModeProvider: React.FC<{children: React.ReactElement}> = ({ children }) => {
  const [mode, changeMode] = useReducer(modeReducer, DEFAULT_MODE)

  return (
    <ModeContext.Provider value={ {mode, changeMode} }>
      {children}
    </ModeContext.Provider>
  );
};
