export interface Info {
  creators: creator[];
  id: number;
  synopsis: string;
  yearsAired: string;
}

export interface creator {
  name: string;
  url: string;
}

export interface IImages {
  headshot: string;
  main: string;
}

export interface IName {
  first: string;
  middle: string;
  last: string;
}
export interface Characters {
  age: string;
  gender: string;
  homePlanet: string;
  id: number;
  images: IImages;
  name: IName;
  occupation: string;
  sayings: string[];
  species: string;
}

export interface Questions {
  correctAnswer: string;
  id: number;
  possibleAnswers: string[];
  question: string;
}
