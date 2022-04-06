import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: [`
    div{
      text-align:center;
      margin-top: 80px;
    }
  `]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
