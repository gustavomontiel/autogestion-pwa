import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpcionesFlujos } from 'src/app/shared/const/rutas-opciones-flujo.const';

@Component({
  selector: 'app-pantalla-post-pago',
  templateUrl: './pantalla-post-pago.page.html',
  styleUrls: ['./pantalla-post-pago.page.scss'],
})
export class PantallaPostPagoPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/home'])
  }

}
