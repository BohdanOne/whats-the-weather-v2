import { ReactElement } from 'react';

export enum Languages {
  en = 'en',
  pl = 'pl'
}

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

export interface IGeolocationResponse {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export interface ISectionHeaderProps {
  title: string;
  titleSpan?: string;
}

export interface ILocationInputProps {
  locationSearch: (location: string) => void;
  language: Languages;
}

export interface ICurrentWeather {
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

export interface ICurrentWeatherDetails {
  weather: ICurrentWeather;
  language: Languages;
}