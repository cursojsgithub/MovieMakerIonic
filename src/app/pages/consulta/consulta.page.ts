import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonProgressBar, IonInput, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonList, IonIcon, IonSearchbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonAlert, IonModal, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { MoviesManagerService } from 'src/app/services/movies-manager.service';
import { archive, heart, trash, starOutline, search, star, heartOutline } from "ionicons/icons";
import { Movie } from 'src/app/interfaces/movie';
import { add } from 'ionicons/icons';
import { AnimationController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: true,
  imports: [IonImg, IonAvatar, IonModal, IonAlert, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonSearchbar, IonIcon, IonList, IonItemOption, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonInput, IonProgressBar, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ConsultaPage implements OnInit {


  borrando : boolean = false;
  imdbIDPAraBorrar : Movie | undefined;
  
  public servicio = inject(MoviesManagerService);
  public filtroPeliculas : string = "";
  public peliculasFiltradas : Movie[];
  public animation : boolean = false;
  public activatedRoute = inject(ActivatedRoute);
  public verFavoritos : boolean = false;

  public ocultarDialogo(){
    this.borrando = false;
  }
  eliminar(pelicula : Movie){
    this.borrando = true;
    this.imdbIDPAraBorrar = pelicula;
  }

  

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.servicio.borrarpelicula(this.imdbIDPAraBorrar);
      },
    },
  ];



  constructor( private animationCtrl: AnimationController) {
      addIcons({search,heartOutline,heart,trash}); 
      this.peliculasFiltradas=this.servicio.getPeliculas();
    }

  
  ngOnInit() {
    this.verFavoritos = this.activatedRoute.snapshot.paramMap.get('fav') as unknown as boolean;
  }

  detalle(){
    this.animation=true
    if(this.animation == true){
      this.enterAnimation;
      this.leaveAnimation;
    }
    
  }

  cerrar(){
    this.animation=false;
    
  }

  public setFav(peliculaFavorita : Movie){
    peliculaFavorita.fav = !peliculaFavorita.fav;
    this.servicio.guardarPeliculas();
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };




  buscar() {
    this.peliculasFiltradas=this.servicio.getPeliculas().filter( peli => peli.Title.toUpperCase().includes(this.filtroPeliculas.toUpperCase()));
  }
}
