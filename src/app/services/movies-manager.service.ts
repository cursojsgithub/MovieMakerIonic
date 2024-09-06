import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

const NODO_RAIZ: string = "peliculas";

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  private peliculas: Movie[] = []
  
  addpelicula(pelicula: Movie) {
    if (this.peliculas.find(p => p.imdbID === pelicula.imdbID) != undefined){
    throw new Error("La película ya existe")
  }
  else{
    this.peliculas.push(pelicula);
    this.guardarPeliculas();
  }
  }

 

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this.storage = await this.storage.create().finally(() => {
      this.rellenarArray();
    });
  }

  rellenarArray(){
    this.storage.get(NODO_RAIZ).
    then((peliculasDB) => {
      if(peliculasDB != null){
        peliculasDB.forEach((element: Movie) => {
          this.peliculas.push(element);
        });
      }
    })
  }


  public getPeliculas(): Movie[] {
    return this.peliculas;
  }

  guardarPeliculas() {
    this.storage.get(NODO_RAIZ).
      then(() => {
          this.storage.set(NODO_RAIZ, this. peliculas); 
      }).
      catch((error) => {
        console.error("Error:" + error);
      }).
      finally(() => {
        console.log("Fin del proceso de almacenamiento");
      });
  }

}