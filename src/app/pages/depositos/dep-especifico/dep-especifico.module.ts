import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepEspecificoPage } from './dep-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: DepEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepEspecificoPage]
})
export class DepEspecificoPageModule {}
