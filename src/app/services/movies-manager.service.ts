import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {


  addpelicula(pelicula: Movie) {
    this.peliculas.push(pelicula);
  }

  private peliculas : Movie[] = []

  constructor() { 
  }

  public getPeliculas(): Movie[]{
    return this.peliculas;
  }

  }