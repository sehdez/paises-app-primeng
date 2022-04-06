import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";



import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';




@NgModule({
  declarations: [
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    MenuComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    MenuComponent
  ]
})
export class PaisesModule { }
