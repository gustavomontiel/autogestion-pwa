import { Component, OnInit } from '@angular/core';
import { OpcionesSeleccionadasService } from 'src/app/shared/services/opciones-seleccionadas.service';
import { Router } from '@angular/router';
import {
  OpcionesFlujos,
  RutasOpcionesFlujo as rutas
} from 'src/app/shared/const/rutas-opciones-flujo.const';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  opcionesFlujos = OpcionesFlujos;
  constructor(
    private router: Router,
    private opcionesSeleccionadasService: OpcionesSeleccionadasService
  ) {}

  ngOnInit(): void {
    this.opcionesSeleccionadasService.resetOpciones();
  }

  setFlujoSeleccionado(opcionFlujo: OpcionesFlujos) {
    this.opcionesSeleccionadasService.setFlujoSeleccionado(opcionFlujo);
    this.router.navigate([rutas.HOME, rutas.INGRESAR_DOCUMENTO]);
  }
}
