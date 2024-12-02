import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoModalPage } from './resultado-modal.page';
describe('ResultadoModalPage', () => {
  let component: ResultadoModalPage;
  let fixture: ComponentFixture<ResultadoModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


