import { Languages } from '../types';

export default (
  language: Languages,
  action: { type: string; payload: Languages }
): Languages => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return (language = action.payload);
    default:
      return language;
  }
};
