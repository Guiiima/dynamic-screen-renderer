import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColum } from './two-colum';

describe('TwoColum', () => {
  let component: TwoColum;
  let fixture: ComponentFixture<TwoColum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoColum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
