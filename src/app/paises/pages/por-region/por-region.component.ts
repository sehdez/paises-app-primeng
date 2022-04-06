import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
      button{
        margin: 5px;
        margin-top: 10px;
        margin-bottom: 10px ; 
      }
      div{
        text-align:center;
      }
  `]
})
export class PorRegionComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private paisesService:PaisesService ) { }

  regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  hayPaises = false;
  buscandoPaises = false;
  paises!: Pais[];
  regionActiva!: string;

  buscar( region: string ){
    this.buscandoPaises = true
    this.regionActiva = region;
    this.paisesService.buscarPorRegion( region )
        .subscribe( paises => {
          this.paises = paises;
          this.hayPaises = true;
          this.buscandoPaises = false;

        } )
  }

  ngOnInit(): void {
  }

}
