import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrFacturaPage } from './qr-factura.page';

describe('QrFacturaPage', () => {
  let component: QrFacturaPage;
  let fixture: ComponentFixture<QrFacturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
