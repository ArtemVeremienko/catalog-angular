import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoInfoComponent } from './auto-info.component';

describe('AutoInfoComponent', () => {
  let component: AutoInfoComponent;
  let fixture: ComponentFixture<AutoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
