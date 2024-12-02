import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoModalPage } from './resultado-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Solo importa las rutas
  exports: [RouterModule]
})
export class ResultadoModalPageRoutingModule {}
