import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises';
import { PaisCompleto } from '../interfaces/paisCompleto';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


        // inyectamos el http para hacer peticiones
  constructor( private http: HttpClient ) { }


  // Url base para hacer las peticiones a restcountries
  private apiUrl: string = 'https://restcountries.com/v3.1';

  private parametros = '?fields=name,capital,population,cca2,cca3,flags,translations'


  //Método para buscar el pais por nombre, regresa un observable de tipo pais (que esta especificado en la interface)
  buscarPorNombre( termino: string ):Observable<Pais[]>  {
    const url = `${ this.apiUrl }/name/${ termino }/${ this.parametros }`
    return this.http.get<Pais[]>( url );
  }

  //Método para buscar el pais por capital
  buscarPorCapital( termino: string ):Observable<Pais[]>  {
    const url = `${ this.apiUrl }/capital/${ termino }/${ this.parametros }`
    return this.http.get<Pais[]>( url );
  }

  buscarPorRegion( termino: string ):Observable<Pais[]>  {
    const url = `${ this.apiUrl }/region/${ termino }/${ this.parametros }`
    return this.http.get<Pais[]>( url );
  }

  buscarPorId( id: string ){
    const url = `${ this.apiUrl }/alpha/${ id }`
    return this.http.get<PaisCompleto[]>( url );
  }

}
