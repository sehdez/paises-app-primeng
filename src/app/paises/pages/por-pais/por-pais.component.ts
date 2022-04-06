import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    a{
      text-decoration: none;
    }
  `]
})
export class PorPaisComponent implements OnInit {

  constructor( private paisService: PaisesService ) { }

  ngOnInit(): void {
  }
  paises!: Pais[]
  hayPaises = false;
  buscandoPaises = false;

  buscar( termino: string ){
    this.buscandoPaises = true;
    this.paisService.buscarPorNombre(termino)
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
