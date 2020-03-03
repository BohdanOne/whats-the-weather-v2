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
