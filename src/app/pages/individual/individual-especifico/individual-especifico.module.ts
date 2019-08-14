import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndividualEspecificoPage } from './individual-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualEspecificoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndividualEspecificoPage]
})
export class IndividualEspecificoPageModule {}
