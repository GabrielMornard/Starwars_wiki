export class Movie{
    title: String;
    episode_id: number;
    opening_crawl: String;
    director: String;
    producer: String;
    release_date: Date; 
    characters: People[];
    planets: String;//A CHANGER
    starships: String;//A CHANGER
    vehicles: String;//A CHANGER
    species: String;// A CHANGER
    created: String;
    edited: String;
    url: String; 

  
    constructor(
        title: string,
        episode_id: number,
        opening_crawl: string,
        director: string,
        producer: string,
        release_date: string | Date,
        characters: People[] = [],
        planets: string = '',
        starships: string = '',
        vehicles: string = '',
        species: string = '',
        created: string,
        edited: string,
        url: string
      ) {
        this.title = title;
        this.episode_id = episode_id;
        this.opening_crawl = opening_crawl;
        this.director = director;
        this.producer = producer;
        this.release_date = new Date(release_date); // Convert string to Date object
        this.characters = characters;
        this.planets = planets;
        this.starships = starships;
        this.vehicles = vehicles;
        this.species = species;
        this.created = created;
        this.edited = edited;
        this.url = url;
      }
}

export class People{
  name: String;
  height: number;
  mass: number;
  hair_color: String; 
  skin_color: String;
  eye_color: String;
  birth_year: String;
  gender: String;
  homeworld: String; //A CHANGER
  films: Movie[];
  species: String[]; //A CHANGER
  vehicles: String[]; //A CHANGER
  starships: String[]; //A CHANGER
  created: String;
  edited: String;
  url: String;

  constructor(
    name: String = '',
    height: number = 0,
    mass: number = 0,
    hair_color: String = '',
    skin_color: String = '',
    eye_color: String = '',
    birth_year: String = '',
    gender: String = '',
    homeworld: String = '',
    films: Movie[] = [],
    species: String[] = [],
    vehicles: String[] = [],
    starships: String[] = [],
    created: String = '',
    edited: String = '',
    url: String = ''
  ) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld = homeworld;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
    this.created = created;
    this.edited = edited;
    this.url = url;
  }
}