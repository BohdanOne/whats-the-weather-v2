import { ReactElement } from 'react';

/* Types for reducers
******************************************************************************/
export enum Languages {
  en = 'en',
  pl = 'pl'
}

export enum Modes {
  light = 'light',
  dark = 'dark'
}

export interface ILocationState {
  location: string;
  dispatch: React.Dispatch<ILocationAction> | null;
}

export interface ILocationAction {
  type: TSetLocation;
  payload: string;
}

export interface IModeState {
  mode: Modes;
  dispatch: React.Dispatch<IModeAction> | null;
}

export interface IModeAction {
  type: TChangeMode;
  payload: Modes;
}

// Action types
export type TChangeLanguage = 'CHANGE_LANGUAGE';

export type TChangeMode = 'CHANGE_MODE';

export type TSetLocation = 'SET_LOCATION';


/* Types for providers
******************************************************************************/
export interface ILanguageContext {
  language: Languages;
  changeLanguage?: React.Dispatch<{type: TChangeLanguage; payload: Languages}>
}

export interface IModeContext {
  mode: Modes;
  changeMode: React.Dispatch<{type: TChangeMode; payload: Modes}> | null
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

export interface IWeather {
  icon: string;
  description: string;
  temp: string;
  feelsLike: string;
  pressure: string;
  humidity: string;
  precipitation: string;
  wind: string;
  clouds: string;
}

export interface IForecast extends IWeather{
  day: string;
  date: string;
}

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
  weather: IWeather;
  language: Languages;
}

export interface IForecastDetailsProps {
  weather: [IForecast];
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