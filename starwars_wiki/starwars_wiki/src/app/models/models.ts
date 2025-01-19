export class Movie{
    title: String;
    episode_id: number;
    opening_crawl: String;
    director: String;
    producer: String;
    release_date: Date; 
    characters: People[];
    planets: String[];
    starships: String[];
    vehicles: String[];
    species: String[];
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
        planets: string[] = [],
        starships: String[] = [],
        vehicles: String[] = [],
        species: String[] = [],
        created: string,
        edited: string,
        url: string
      ) {
        this.title = title;
        this.episode_id = episode_id;
        this.opening_crawl = opening_crawl;
        this.director = director;
        this.producer = producer;
        this.release_date = new Date(release_date);
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
  homeworld: String;
  films: string[];
  species: String[];
  vehicles: String[]; 
  starships: String[];
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
    films: string[] = [],
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

export class Starship {
  mglt: String;
  cargo_capacity: String;
  consumables: String;
  cost_in_credits: String;
  created: String;
  crew: String;
  edited: String;
  hyperdrive_rating: String;
  length: String;
  manufacturer: String;
  max_atmosphering_speed: String;
  model: String;
  name: String;
  passengers: String;
  films: String[];
  pilots: String[];
  starship_class: String;
  url: String;

  constructor(
    mglt: String = '',
    cargo_capacity: String = '',
    consumables: String = '',
    cost_in_credits: String = '',
    created: String = '',
    crew: String = '',
    edited: String = '',
    hyperdrive_rating: String = '',
    length: String = '',
    manufacturer: String = '',
    max_atmosphering_speed: String = '',
    model: String = '',
    name: String = '',
    passengers: String = '',
    films: String[] = [],
    pilots: String[] = [],
    starship_class: String = '',
    url: String = ''
  ) {
    this.mglt = mglt;
    this.cargo_capacity = cargo_capacity;
    this.consumables = consumables;
    this.cost_in_credits = cost_in_credits;
    this.created = created;
    this.crew = crew;
    this.edited = edited;
    this.hyperdrive_rating = hyperdrive_rating;
    this.length = length;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.model = model;
    this.name = name;
    this.passengers = passengers;
    this.films = films;
    this.pilots = pilots;
    this.starship_class = starship_class;
    this.url = url;
  }
}

export class Vehicle {
  cargo_capacity: String;
  consumables: String;
  cost_in_credits: String;
  created: String;
  crew: String;
  edited: String;
  length: String;
  manufacturer: String;
  max_atmosphering_speed: String;
  model: String;
  name: String;
  passengers: String;
  pilots: String[];
  films: String[];
  url: String;
  vehicle_class: String;

  constructor(
    cargo_capacity: String = '',
    consumables: String = '',
    cost_in_credits: String = '',
    created: String = '',
    crew: String = '',
    edited: String = '',
    length: String = '',
    manufacturer: String = '',
    max_atmosphering_speed: String = '',
    model: String = '',
    name: String = '',
    passengers: String = '',
    pilots: String[] = [],
    films: String[] = [],
    url: String = '',
    vehicle_class: String = ''
  ) {
    this.cargo_capacity = cargo_capacity;
    this.consumables = consumables;
    this.cost_in_credits = cost_in_credits;
    this.created = created;
    this.crew = crew;
    this.edited = edited;
    this.length = length;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.model = model;
    this.name = name;
    this.passengers = passengers;
    this.pilots = pilots;
    this.films = films;
    this.url = url;
    this.vehicle_class = vehicle_class;
  }
}

export class Species {
  average_height: String;
  average_lifespan: String;
  classification: String;
  created: String;
  designation: String;
  edited: String;
  eye_colors: String;
  hair_colors: String;
  homeworld: String; 
  language: String;
  name: String;
  people: String[];
  films: String[];
  skin_colors: String;
  url: String;

  constructor(
    average_height: String = '',
    average_lifespan: String = '',
    classification: String = '',
    created: String = '',
    designation: String = '',
    edited: String = '',
    eye_colors: String = '',
    hair_colors: String = '',
    homeworld: String = '',
    language: String = '',
    name: String = '',
    people: String[] = [],
    films: String[] = [],
    skin_colors: String = '',
    url: String = ''
  ) {
    this.average_height = average_height;
    this.average_lifespan = average_lifespan;
    this.classification = classification;
    this.created = created;
    this.designation = designation;
    this.edited = edited;
    this.eye_colors = eye_colors;
    this.hair_colors = hair_colors;
    this.homeworld = homeworld;
    this.language = language;
    this.name = name;
    this.people = people;
    this.films = films;
    this.skin_colors = skin_colors;
    this.url = url;
  }
}

export class Planet {
  climate: String;
  created: String;
  diameter: String;
  edited: String;
  films: string[];
  gravity: String;
  name: String;
  orbital_period: String;
  population: String;
  residents: string[]; 
  rotation_period: String;
  surface_water: String;
  terrain: String;
  url: String;

  constructor(
    climate: String = '',
    created: String = '',
    diameter: String = '',
    edited: String = '',
    films: string[] = [],
    gravity: String = '',
    name: String = '',
    orbital_period: String = '',
    population: String = '',
    residents: string[] = [],
    rotation_period: String = '',
    surface_water: String = '',
    terrain: String = '',
    url: String = ''
  ) {
    this.climate = climate;
    this.created = created;
    this.diameter = diameter;
    this.edited = edited;
    this.films = films;
    this.gravity = gravity;
    this.name = name;
    this.orbital_period = orbital_period;
    this.population = population;
    this.residents = residents;
    this.rotation_period = rotation_period;
    this.surface_water = surface_water;
    this.terrain = terrain;
    this.url = url;
  }
}
