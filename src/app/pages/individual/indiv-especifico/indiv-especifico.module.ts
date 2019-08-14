import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndivEspecificoPage } from './indiv-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: IndivEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndivEspecificoPage]
})
export class IndivEspecificoPageModule {}
