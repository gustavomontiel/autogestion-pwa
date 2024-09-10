import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common'

@Component({
  selector: 'app-boton-volver',
  templateUrl: './boton-volver.component.html',
  styleUrls: ['./boton-volver.component.scss'],
})
export class BotonVolverComponent  implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {}
  volver() {
    this.location.back()
   }
}
