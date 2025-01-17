export class Movie{
    title: String;
    episode_id: number;
    opening_crawl: String;
    director: String;
    producer: String;
    release_date: Date; 
    characters: Character[];
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
        characters: Character[] = [],
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

export class Character{

}