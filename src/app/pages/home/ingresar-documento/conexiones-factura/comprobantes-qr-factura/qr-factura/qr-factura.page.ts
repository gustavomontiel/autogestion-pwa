import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasOpcionesFlujo as rutas} from 'src/app/shared/const/rutas-opciones-flujo.const';

@Component({
  selector: 'app-qr-factura',
  templateUrl: './qr-factura.page.html',
  styleUrls: ['./qr-factura.page.scss']
})
export class QrFacturaPage implements OnInit {
  urlFactura: string|undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.urlFactura = params['urlFactura'];
    })
  }
  backHome(){
    this.router.navigate([rutas.HOME]);
  }


}
