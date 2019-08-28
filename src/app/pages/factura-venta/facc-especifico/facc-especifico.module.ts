import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaccEspecificoPage } from './facc-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: FaccEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaccEspecificoPage]
})
export class FaccEspecificoPageModule {}
