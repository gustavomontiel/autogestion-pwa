import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConexionesDeudaPage } from './conexiones-deuda.page';

describe('ConexionesDeudaPage', () => {
  let component: ConexionesDeudaPage;
  let fixture: ComponentFixture<ConexionesDeudaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionesDeudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
