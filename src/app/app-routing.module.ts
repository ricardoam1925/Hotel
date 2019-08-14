import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import {UsuarioFiltroPage} from './pages/usuario-filtro/usuario-filtro.page'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
  { path: 'usuario-filtro/:id', loadChildren: './pages/usuario-filtro/usuario-filtro.module#UsuarioFiltroPageModule' },
  { path: 'depositos', loadChildren: './pages/depositos/depositos.module#DepositosPageModule' },
  { path: 'dep-diario', loadChildren: './pages/depositos/dep-diario/dep-diario.module#DepDiarioPageModule' },
  { path: 'dep-mensual', loadChildren: './pages/depositos/dep-mensual/dep-mensual.module#DepMensualPageModule' },
  { path: 'dep-especifico', loadChildren: './pages/depositos/dep-especifico/dep-especifico.module#DepEspecificoPageModule' },
  { path: 'deposito-diario/:fecha', loadChildren: './pages/depositos/deposito-diario/deposito-diario.module#DepositoDiarioPageModule' },
  { path: 'deposito-mensual/:fecha', loadChildren: './pages/depositos/deposito-mensual/deposito-mensual.module#DepositoMensualPageModule' },
  { path: 'deposito-especifico/:fecha_i/:fecha_f', loadChildren: './pages/depositos/deposito-especifico/deposito-especifico.module#DepositoEspecificoPageModule' },
  { path: 'gastos', loadChildren: './pages/gastos/gastos.module#GastosPageModule' },
  { path: 'gast-diario', loadChildren: './pages/gastos/gast-diario/gast-diario.module#GastDiarioPageModule' },
  { path: 'gast-especifico', loadChildren: './pages/gastos/gast-especifico/gast-especifico.module#GastEspecificoPageModule' },
  { path: 'gast-mensual', loadChildren: './pages/gastos/gast-mensual/gast-mensual.module#GastMensualPageModule' },
  { path: 'gasto-diario/:fecha', loadChildren: './pages/gastos/gasto-diario/gasto-diario.module#GastoDiarioPageModule' },
  { path: 'gasto-especifico/:fecha_i/:fecha_f', loadChildren: './pages/gastos/gasto-especifico/gasto-especifico.module#GastoEspecificoPageModule' },
  { path: 'gasto-mensual/:fecha', loadChildren: './pages/gastos/gasto-mensual/gasto-mensual.module#GastoMensualPageModule' },
  { path: 'generales', loadChildren: './pages/generales/generales.module#GeneralesPageModule' },
  { path: 'gen-diario', loadChildren: './pages/generales/gen-diario/gen-diario.module#GenDiarioPageModule' },
  { path: 'gen-especifico', loadChildren: './pages/generales/gen-especifico/gen-especifico.module#GenEspecificoPageModule' },
  { path: 'gen-mensual', loadChildren: './pages/generales/gen-mensual/gen-mensual.module#GenMensualPageModule' },
  { path: 'general-diario/:fecha', loadChildren: './pages/generales/general-diario/general-diario.module#GeneralDiarioPageModule' },
  { path: 'general-especifico/:fecha_i/:fecha_f', loadChildren: './pages/generales/general-especifico/general-especifico.module#GeneralEspecificoPageModule' },
  { path: 'general-mensual/:fecha', loadChildren: './pages/generales/general-mensual/general-mensual.module#GeneralMensualPageModule' },
  { path: 'individual', loadChildren: './pages/individual/individual.module#IndividualPageModule' },
  { path: 'indiv-diario', loadChildren: './pages/individual/indiv-diario/indiv-diario.module#IndivDiarioPageModule' },
  { path: 'indiv-mensual', loadChildren: './pages/individual/indiv-mensual/indiv-mensual.module#IndivMensualPageModule' },
  { path: 'indiv-especifico', loadChildren: './pages/individual/indiv-especifico/indiv-especifico.module#IndivEspecificoPageModule' },
  { path: 'individual-diario/:id', loadChildren: './pages/individual/individual-diario/individual-diario.module#IndividualDiarioPageModule' },
  { path: 'individual-mensual/:ide/:fecha', loadChildren: './pages/individual/individual-mensual/individual-mensual.module#IndividualMensualPageModule' },
  { path: 'individual-especifico/:ide/:fecha_i/:fecha_f', loadChildren: './pages/individual/individual-especifico/individual-especifico.module#IndividualEspecificoPageModule' },
  { path: 'usuario-diario/:fecha', loadChildren: './pages/individual/indiv-diario/usuario-diario/usuario-diario.module#UsuarioDiarioPageModule' },
  { path: 'usuario-mensual/:fecha', loadChildren: './pages/individual/indiv-mensual/usuario-mensual/usuario-mensual.module#UsuarioMensualPageModule' },
  { path: 'usuario-especifico/:fecha_i/:fecha_f', loadChildren: './pages/individual/indiv-especifico/usuario-especifico/usuario-especifico.module#UsuarioEspecificoPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
