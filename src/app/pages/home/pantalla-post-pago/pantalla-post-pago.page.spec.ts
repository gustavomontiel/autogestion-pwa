import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PantallaPostPagoPage } from './pantalla-post-pago.page';

describe('PantallaPostPagoPage', () => {
  let component: PantallaPostPagoPage;
  let fixture: ComponentFixture<PantallaPostPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPostPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
