import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-acerdade',
  templateUrl: './acerdade.page.html',
  styleUrls: ['./acerdade.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class AcerdadePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
