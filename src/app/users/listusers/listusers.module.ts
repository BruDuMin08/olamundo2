import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListusersPageRoutingModule } from './listusers-routing.module';

import { ListusersPage } from './listusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListusersPageRoutingModule
  ],
  declarations: [ListusersPage]
})
export class ListusersPageModule {}
