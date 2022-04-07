import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor() { }
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Buscar país por',
              icon: 'pi pi-search',
              items: [
                { label: 'Nombre',  icon: 'pi pi-hashtag', routerLink: 'pais'   },
                { label: 'Region',  icon: 'pi pi-globe',   routerLink: 'region' },
                { label: 'Capital', icon: 'pi pi-map',     routerLink: 'capital'}
              ]
          },
          {
              label: 'Contacto',
              icon: 'pi pi-user',
              items: [
                  { label: 'Código en Github', icon: 'pi pi-github', url: 'https://github.com/sehdez/paises-app-primeng'},
                  { label: 'Más App', 
                    icon: 'pi pi-plus',
                    items: [
                      { label: 'Heroes App', icon: 'pi pi-link', url: 'https://sehdez.github.io/Heroes-App/#/heroes/listado' },
                      { label: 'Login App', icon: 'pi pi-link', url: 'https://auth-by-sergio.herokuapp.com/auth/login' },
                      { label: 'Portafolio de productos', icon: 'pi pi-link', url: 'https://sehdez.github.io/portafolio/#/home' },
                      { label: 'Graficas App', icon: 'pi pi-link', url: 'https://sehdez.github.io/Graficas/#/graficas/barras-doble' },
                      { label: 'Pipes de Angular', icon: 'pi pi-link', url: 'https://sehdez.github.io/pipes-app/' }
                    ] 
                  }]
          }
      ];
  }

}
