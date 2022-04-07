import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [`
    input, .ancho {
      width: 100%;
    }
  `]
})
export class PaisInputComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private service: PaisesService ) { }

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';

  text!: string;

  results!: string[];

  // Método para buscar el autocompletado
  search() {
    // En caso de que se encuentre en buscar pais
    if( this.placeholder === 'Buscar país' ){
      const { termino } = this.miFormulario.value;
      this.service.buscarPorNombre( termino )
      .subscribe( paises => {
        let paisesArray = []
        for (const pais in paises) {
          paisesArray.push(paises[pais].name.common)
        }
        this.results = paisesArray;
      }, (error) => {
        this.results = [];
      })

      // En caso de que se encuentre en buscar poc capital
    }else{
      const { termino } = this.miFormulario.value;
      this.service.buscarPorCapital( termino )
      .subscribe( paises => {
        let paisesArray = []
        for (const pais in paises) {
          paisesArray.push(paises[pais].capital[0])
        }
        this.results = paisesArray;
      }, (error) => {
        this.results = [];
      })
    }

    }



    //Formulario reactivo
  miFormulario: FormGroup = this.fb.group({
    termino: ['', Validators.required],
    city: ['']
  })
  // método para emitir el termino que se presionó
  buscar(){
    const { termino } = this.miFormulario.value;
    if( termino.trim().length == 0 ){
      return
    }
    this.onEnter.emit( termino );
  }

  ngOnInit(): void {
  }

}
