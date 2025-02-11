import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantosPage } from './santos.page';

const routes: Routes = [
  {
    path: '',
    component: SantosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantosPageRoutingModule {}
