import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenEdicionComponent } from './examen-edicion.component';

describe('ExamenEdicionComponent', () => {
  let component: ExamenEdicionComponent;
  let fixture: ComponentFixture<ExamenEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
