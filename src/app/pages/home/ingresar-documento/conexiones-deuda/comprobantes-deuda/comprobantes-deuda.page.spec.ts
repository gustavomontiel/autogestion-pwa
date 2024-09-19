import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprobantesDeudaPage } from './comprobantes-deuda.page';

describe('ComprobantesDeudaPage', () => {
  let component: ComprobantesDeudaPage;
  let fixture: ComponentFixture<ComprobantesDeudaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesDeudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
