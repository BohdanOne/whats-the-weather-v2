import { ReactElement } from 'react';

/* Types for reducers
******************************************************************************/
export enum Languages {
  en = 'en',
  pl = 'pl'
}

export interface ILocationState {
  location: string;
  dispatch: React.Dispatch<ILocationAction> | null;
}

export interface ILocationAction {
  type: TSetLocation;
  payload: string;
}

// Action types
export type TChangeLanguage = 'CHANGE_LANGUAGE';

export type TSetLocation = 'SET_LOCATION';


/* Types for providers
******************************************************************************/
export interface ILanguageContext {
  language: Languages;
  changeLanguage?: React.Dispatch<{type: string; payload: Languages}>
}

export interface ILocationContext {
  location: string;
  dispatch: React.Dispatch<ILocationAction> | null;
}


/* Types for api responses
******************************************************************************/
export interface IGeolocationResponse {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export interface ICurrentWeatherResponse {
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min?: number;
    temp_max?: number;
    pressure: number; // hPa
    humidity: number; // %
  };
  visibility?: number;
  wind?: {
    speed?: number; // m/s
    deg?: number;
  };
  clouds?: { all?: number }; // %
  rain?: { '1h'?: number }; // mm
  snow?: { '1h'?: number }; // mm
};



/* Types for nav components
******************************************************************************/
export interface INavClickable {
  handleClick: () => void;
}

export interface INavWithLanguage extends INavClickable {
  language: Languages;
}

export interface INavButton extends INavClickable {
  label: string;
  children: ReactElement;
}


/* Types for main components props
******************************************************************************/
export interface ICurrentWeatherDetailsProps {
  weather: ICurrentWeatherResponse;
  language: Languages;
}

export interface ISectionHeaderProps {
  title: string;
  titleSpan?: string;
}

export interface ILocationInputProps {
  locationSearch: (location: string) => void;
  language: Languages;
}