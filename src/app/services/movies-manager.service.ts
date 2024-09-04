import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {

  private peliculas : Movie[] = []

  constructor() { 
    this.rellenarArray()
  }

  public getPeliculas(): Movie[]{
    return this.peliculas;
  }
  rellenarArray(){
    let p1 : Movie = {titulo : "batman",
      generos : "genero1",
      year : 1999,
      poster : "poster1",
      sinopsis : "sinopsis1",
      fav : true
    };
  
    let p2 : Movie = {titulo : "superman",
      generos : "genero2",
      year : 1999,
      poster : "poster2",
      sinopsis : "sinopsis2",
      fav : true
    };
    this.peliculas.push(p1);
    this.peliculas.push(p2);
  }
  }