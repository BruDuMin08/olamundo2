import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListusersPage } from './listusers.page';

const routes: Routes = [
  {
    path: '',
    component: ListusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListusersPageRoutingModule {}
