import { Injectable } from '@angular/core';
import { IntConexionesDeuda } from '../interfaces/conexiones-deuda.interface';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor() { }

  buscarConexion(query: string, array: IntConexionesDeuda[]): any {
    if (query != '' && query != null) {
      console.log(query);
      let arrayFiltrado = array.filter(
        (resultado: any) => {
          return resultado.NroConexion.includes(query)
        }
      )
      console.log(arrayFiltrado);

      return arrayFiltrado
    } else {
      return array
    }
  }

  buscarConexionDeuda(query: string, array: IntConexionesDeuda[]): any {
    if (query != '' && query != null) {
      console.log(query);
      let arrayFiltrado = array.filter(
        (resultado: any) => {
          return resultado.NroConexion.includes(query) && resultado.Importe != ".00"
        }
      )
      console.log(arrayFiltrado);

      return arrayFiltrado
    } else {
      return array
    }
  }




}
