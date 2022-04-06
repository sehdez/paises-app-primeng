import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  { path: '', component: PorPaisComponent },
  { path: 'capital', component: PorCapitalComponent },
  { path: 'region', component: PorRegionComponent },
  { path: 'pais/:id', component: VerPaisComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
