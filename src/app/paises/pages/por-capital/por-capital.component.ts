import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor( private paisService: PaisesService ) { }

  ngOnInit(): void {
  }
  paises!: Pais []
  hayPaises = false;
  buscandoPaises = false;

  buscar( termino: string ){
    this.buscandoPaises = true;
    this.paisService.buscarPorCapital(termino)
        .subscribe( (pais: Pais[]) =>{
          if (!pais){
            return;
          }
          this.hayPaises = true;
          this.paises = pais;
          this.buscandoPaises = false;
        })
  }

}
