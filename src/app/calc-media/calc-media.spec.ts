import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcMedia } from './calc-media';

describe('CalcMedia', () => {
  let component: CalcMedia;
  let fixture: ComponentFixture<CalcMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcMedia],
    }).compileComponents();

    fixture = TestBed.createComponent(CalcMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
