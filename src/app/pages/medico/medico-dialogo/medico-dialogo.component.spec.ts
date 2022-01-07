import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDialogoComponent } from './medico-dialogo.component';

describe('MedicoDialogoComponent', () => {
  let component: MedicoDialogoComponent;
  let fixture: ComponentFixture<MedicoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
