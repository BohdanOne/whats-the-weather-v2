import { Languages, TChangeLanguage } from '../types';

const CHANGE_LANGUAGE: TChangeLanguage = 'CHANGE_LANGUAGE';

export default (
  language: Languages,
  action: { type: TChangeLanguage; payload: Languages }
): Languages => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return (language = action.payload);
    default:
      return language;
  }
};
