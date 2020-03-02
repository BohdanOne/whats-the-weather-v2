export enum Languages {
  en = 'en',
  pl = 'pl'
}

export interface IGeolocationResponse {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export interface INavClickable {
  handleClick?: () => void;
  language: Languages;
}