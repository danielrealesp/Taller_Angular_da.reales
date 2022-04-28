
export class Serie {

  id: number;

  name: string;

  channel: string

  seasons: number;

  description: string;

  webpage: string;

  poster: string;

  constructor(id: number, name: string, channel: string, seasons: number, description: string, webpage: string, poster: string)
  {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = webpage;
    this.poster = poster;
  }

  //Getters and setters

  public getId(): number
  {
    return this.id;
  }

  public getName(): string
  {
    return this.name;
  }

  public getChannel(): string
  {
    return this.channel;
  }

  public getSeason(): number
  {
    return this.seasons;
  }

  public getDescription(): string
  {
    return this.description;
  }

  public getWebPage():string
  {
    return this.webpage;
  }

  public getPoster():string
  {
    return this.poster;
  }

}
