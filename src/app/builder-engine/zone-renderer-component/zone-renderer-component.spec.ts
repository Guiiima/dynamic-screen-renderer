import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneRendererComponent } from './zone-renderer-component';

describe('ZoneRendererComponent', () => {
  let component: ZoneRendererComponent;
  let fixture: ComponentFixture<ZoneRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneRendererComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
