import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerarReclamoPage } from './generar-reclamo.page';

describe('GenerarReclamoPage', () => {
  let component: GenerarReclamoPage;
  let fixture: ComponentFixture<GenerarReclamoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarReclamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
