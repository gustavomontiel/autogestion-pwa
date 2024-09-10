import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConexionesFacturaPage } from './conexiones-factura.page';

describe('ConexionesFacturaPage', () => {
  let component: ConexionesFacturaPage;
  let fixture: ComponentFixture<ConexionesFacturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionesFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
