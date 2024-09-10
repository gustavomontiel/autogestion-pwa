import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprobantesQrFacturaPage } from './comprobantes-qr-factura.page';

describe('ComprobantesQrFacturaPage', () => {
  let component: ComprobantesQrFacturaPage;
  let fixture: ComponentFixture<ComprobantesQrFacturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesQrFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
