import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CubataoPageRoutingModule } from './cubatao-routing.module';

import { CubataoPage } from './cubatao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CubataoPageRoutingModule
  ],
  declarations: [CubataoPage]
})
export class CubataoPageModule {}
