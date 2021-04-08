import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageSelectorComponent } from './lenguage-selector.component';

describe('LenguageSelectorComponent', () => {
  let component: LenguageSelectorComponent;
  let fixture: ComponentFixture<LenguageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
