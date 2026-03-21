import locationsJson from './data/locations.json';

export interface Location {
  slug: string;
  name: string;
  areas: string[];
  description: string;
}

export const locations: Location[] = locationsJson as Location[];
