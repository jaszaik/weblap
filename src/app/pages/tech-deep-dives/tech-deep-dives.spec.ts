import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDeepDivesComponent } from './tech-deep-dives.component';

describe('TechDeepDives', () => {
  let component: TechDeepDivesComponent;
  let fixture: ComponentFixture<TechDeepDivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechDeepDivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDeepDivesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
