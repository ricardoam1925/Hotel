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
  { path: 'factura-venta', loadChildren: './pages/factura-venta/factura-venta.module#FacturaVentaPageModule' },
  { path: 'facc-diario', loadChildren: './pages/factura-venta/facc-diario/facc-diario.module#FaccDiarioPageModule' },
  { path: 'facc-especifico', loadChildren: './pages/factura-venta/facc-especifico/facc-especifico.module#FaccEspecificoPageModule' },
  { path: 'facc-mensual', loadChildren: './pages/factura-venta/facc-mensual/facc-mensual.module#FaccMensualPageModule' },
  { path: 'facturac-diario/:fecha', loadChildren: './pages/factura-venta/facturac-diario/facturac-diario.module#FacturacDiarioPageModule' },
  { path: 'facturac-especifico/:fecha_i/:fecha_f', loadChildren: './pages/factura-venta/facturac-especifico/facturac-especifico.module#FacturacEspecificoPageModule' },
  { path: 'facturac-mensual/:fecha', loadChildren: './pages/factura-venta/facturac-mensual/facturac-mensual.module#FacturacMensualPageModule' },
  
  { path: 'factura-compra', loadChildren: './pages/factura-compra/factura-compra.module#FacturaCompraPageModule' },
  { path: 'fac-diario', loadChildren: './pages/factura-compra/fac-diario/fac-diario.module#FacDiarioPageModule' },
  { path: 'fac-especifico', loadChildren: './pages/factura-compra/fac-especifico/fac-especifico.module#FacEspecificoPageModule' },
  { path: 'fac-mensual', loadChildren: './pages/factura-compra/fac-mensual/fac-mensual.module#FacMensualPageModule' },
  { path: 'factura-compra-diario/:fecha', loadChildren: './pages/factura-compra/factura-compra-diario/factura-compra-diario.module#FacturaCompraDiarioPageModule' },
  { path: 'factura-compra-especifico/:fecha_i/:fecha_f', loadChildren: './pages/factura-compra/factura-compra-especifico/factura-compra-especifico.module#FacturaCompraEspecificoPageModule' },
  //{ path: 'factura-compra-mensual/:fecha', loadChildren: './pages/factura-compra/factura-compra-mensual/factura-compra-mensual.module#FacturaCompraMensualPageModule' },
  { path: 'compra-mensual/:fecha', loadChildren: './pages/factura-compra/compra-mensual/compra-mensual.module#CompraMensualPageModule' },
  { path: 'habitacion', loadChildren: './pages/habitacion/habitacion.module#HabitacionPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
