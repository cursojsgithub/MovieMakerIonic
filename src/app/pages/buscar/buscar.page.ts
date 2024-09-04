import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonSearchbar, IonButton, IonProgressBar, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonItemOption, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonList, IonProgressBar, IonButton, IonSearchbar, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class BuscarPage implements OnInit {

  public peliculas : string = "";
  public peliculasBuscadas : Movie[] = [];
  constructor() { }

  ngOnInit() {
  }

}
