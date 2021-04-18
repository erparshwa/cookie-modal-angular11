import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAccordionComponent } from './sp-accordion.component';

describe('SpAccordionComponent', () => {
  let component: SpAccordionComponent;
  let fixture: ComponentFixture<SpAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
