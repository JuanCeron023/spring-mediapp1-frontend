import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoComponentComponent } from './dialogo-component.component';

describe('DialogoComponentComponent', () => {
  let component: DialogoComponentComponent;
  let fixture: ComponentFixture<DialogoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
