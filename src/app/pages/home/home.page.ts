import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( public navCtrl: NavController ) { }

  ngOnInit() {
  }

  // Ação do botão "Listar usuários"
  listUsers() {
    this.navCtrl.navigateForward('usuarios/todos');
  }

}
