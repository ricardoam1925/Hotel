import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GenEspecificoPage } from './gen-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: GenEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenEspecificoPage]
})
export class GenEspecificoPageModule {}
