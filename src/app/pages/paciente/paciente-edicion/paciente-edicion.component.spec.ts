import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteEdicionComponent } from './paciente-edicion.component';

describe('PacienteEdicionComponent', () => {
  let component: PacienteEdicionComponent;
  let fixture: ComponentFixture<PacienteEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
