import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorTemp } from './conversor-temp';

describe('ConversorTemp', () => {
  let component: ConversorTemp;
  let fixture: ComponentFixture<ConversorTemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorTemp],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversorTemp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
