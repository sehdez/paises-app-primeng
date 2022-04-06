import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  constructor() { }

  @Input() hayPaises!: boolean;

  @Input() paises!: Pais[];

  ngOnInit(): void {
  }

}
