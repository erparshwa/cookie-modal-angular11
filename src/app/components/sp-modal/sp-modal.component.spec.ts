import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpModalComponent } from './sp-modal.component';

describe('SpModalComponent', () => {
  let component: SpModalComponent;
  let fixture: ComponentFixture<SpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
