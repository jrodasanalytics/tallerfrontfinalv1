import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoDatosComponent } from './consumo-datos.component';

describe('ConsumoDatosComponent', () => {
  let component: ConsumoDatosComponent;
  let fixture: ComponentFixture<ConsumoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
