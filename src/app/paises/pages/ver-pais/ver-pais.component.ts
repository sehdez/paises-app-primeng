import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { ActivatedRoute } from "@angular/router";


import { PaisesService } from '../../services/paises.service';
import { PaisCompleto } from '../../interfaces/paisCompleto';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [`
    img{
      border-radius: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    h1{
      text-align: center;
    }
  `]
})
export class VerPaisComponent implements OnInit {



  pais!: PaisCompleto[];


  constructor( private route:ActivatedRoute,
               private paisesServices: PaisesService ) { }

  ngOnInit(): void {
    this.route.params
        .pipe(
          switchMap( ({ id }) => this.paisesServices.buscarPorId( id )),
        )
        .subscribe( pais => {
          this.pais = pais;
        })
  
  }

  

}
