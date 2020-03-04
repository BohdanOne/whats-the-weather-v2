import { Modes, TChangeMode } from '../types';

const CHANGE_MODE: TChangeMode = 'CHANGE_MODE';

export default (
  mode: Modes,
  action: { type: TChangeMode; payload: Modes }
): Modes => {
  switch (action.type) {
    case CHANGE_MODE:
      return (mode = action.payload);
    default:
      return mode;
  }
};
