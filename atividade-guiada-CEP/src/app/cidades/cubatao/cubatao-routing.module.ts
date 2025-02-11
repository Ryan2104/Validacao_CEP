import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CubataoPage } from './cubatao.page';

const routes: Routes = [
  {
    path: '',
    component: CubataoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubataoPageRoutingModule {}
