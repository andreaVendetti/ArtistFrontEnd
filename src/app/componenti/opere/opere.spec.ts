import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opere } from './opere';

describe('Opere', () => {
  let component: Opere;
  let fixture: ComponentFixture<Opere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opere],
    }).compileComponents();

    fixture = TestBed.createComponent(Opere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
