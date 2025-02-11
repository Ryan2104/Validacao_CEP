import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SantosPageRoutingModule } from './santos-routing.module';

import { SantosPage } from './santos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SantosPageRoutingModule
  ],
  declarations: [SantosPage]
})
export class SantosPageModule {}
