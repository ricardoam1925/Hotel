import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndividualDiarioPage } from './individual-diario.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualDiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndividualDiarioPage]
})
export class IndividualDiarioPageModule {}
