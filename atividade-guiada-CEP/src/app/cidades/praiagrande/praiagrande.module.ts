import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraiagrandePageRoutingModule } from './praiagrande-routing.module';

import { PraiagrandePage } from './praiagrande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraiagrandePageRoutingModule
  ],
  declarations: [PraiagrandePage]
})
export class PraiagrandePageModule {}
