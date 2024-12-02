import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResultadoModalPageRoutingModule } from './resultado-modal-routing.module';
import { ResultadoModalPage } from './resultado-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoModalPageRoutingModule
  ],
  declarations: [ResultadoModalPage]
})
export class ResultadoModalPageModule { }