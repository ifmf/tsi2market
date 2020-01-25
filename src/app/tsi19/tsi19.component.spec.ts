import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tsi19Component } from './tsi19.component';

describe('Tsi19Component', () => {
  let component: Tsi19Component;
  let fixture: ComponentFixture<Tsi19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tsi19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tsi19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
