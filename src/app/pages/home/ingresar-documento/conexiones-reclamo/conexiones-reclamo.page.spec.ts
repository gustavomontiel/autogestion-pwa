import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConexionesReclamoPage } from './conexiones-reclamo.page';

describe('ConexionesReclamoPage', () => {
  let component: ConexionesReclamoPage;
  let fixture: ComponentFixture<ConexionesReclamoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionesReclamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
