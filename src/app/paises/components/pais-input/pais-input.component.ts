import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [`
    input{
      width: 100%;
    }
  `]
})
export class PaisInputComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';


  miFormulario: FormGroup = this.fb.group({
    termino: ['', Validators.required]
  })

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
