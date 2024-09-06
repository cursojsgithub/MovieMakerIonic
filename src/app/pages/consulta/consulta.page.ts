import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonProgressBar, IonInput, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonList, IonIcon, IonSearchbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonAlert } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/services/movies-manager.service';
import { archive, heart, trash } from "ionicons/icons";
import { Movie } from 'src/app/interfaces/movie';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: true,
  imports: [IonAlert, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonSearchbar, IonIcon, IonList, IonItemOption, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonInput, IonProgressBar, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ConsultaPage implements OnInit {


  borrando : boolean = false;
  public servicio = inject(MoviesManagerService);
  public filtroPeliculas : string = "";
  public peliculasFiltradas : Movie[];

  public ocultarDialogo(){
    this.borrando = false;
  }
  eliminar(){
    this.borrando = true;
  }



  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  constructor( ) {
      addIcons({trash}); 
      this.peliculasFiltradas=this.servicio.getPeliculas();
    }

  
  ngOnInit() {

  }

  buscar() {
    this.peliculasFiltradas=this.servicio.getPeliculas().filter( peli => peli.Title.toUpperCase().includes(this.filtroPeliculas.toUpperCase()));
  }
}
