import { Inject, inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const BASE_URL = "https://www.omdbapi.com";
const API_KEY = environment.OMDB_API_KEY;

@Injectable({
  providedIn: 'root'
})

export class HttpomdbService {


  constructor() { }
}
