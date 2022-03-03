import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComponent2Component } from './dummy-component2.component';

describe('DummyComponent2Component', () => {
  let component: DummyComponent2Component;
  let fixture: ComponentFixture<DummyComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
