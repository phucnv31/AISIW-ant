import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSettingsDetailComponent } from './action-settings-detail.component';

describe('ActionSettingsDetailComponent', () => {
  let component: ActionSettingsDetailComponent;
  let fixture: ComponentFixture<ActionSettingsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionSettingsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSettingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
