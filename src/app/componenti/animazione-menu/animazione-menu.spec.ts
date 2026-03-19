import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAnimation } from './animazione-menu';

describe('EnterAnimation', () => {
  let component: EnterAnimation;
  let fixture: ComponentFixture<EnterAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterAnimation],
    }).compileComponents();

    fixture = TestBed.createComponent(EnterAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
