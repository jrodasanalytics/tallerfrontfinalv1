import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrotabComponent } from './filtrotab.component';

describe('FiltrotabComponent', () => {
  let component: FiltrotabComponent;
  let fixture: ComponentFixture<FiltrotabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrotabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrotabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
