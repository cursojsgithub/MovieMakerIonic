import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from "ionicons";


const TIEMPO_ESPERA : number = 3300;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class IntroPage implements OnInit {

  

  constructor(private router : Router) {
    setTimeout(() => {
      this.router.navigate(['consulta/false'])
    }, TIEMPO_ESPERA);
   }

  

  ngOnInit() {
    
  }

}
