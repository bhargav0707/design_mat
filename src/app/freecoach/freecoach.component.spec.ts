import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreecoachComponent } from './freecoach.component';

describe('FreecoachComponent', () => {
  let component: FreecoachComponent;
  let fixture: ComponentFixture<FreecoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreecoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
