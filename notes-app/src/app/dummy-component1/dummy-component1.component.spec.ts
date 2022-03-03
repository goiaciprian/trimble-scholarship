import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComponent1Component } from './dummy-component1.component';

describe('DummyComponent1Component', () => {
  let component: DummyComponent1Component;
  let fixture: ComponentFixture<DummyComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
