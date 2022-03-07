import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaCurs3Component } from './tema-curs3.component';

describe('TemaCurs3Component', () => {
  let component: TemaCurs3Component;
  let fixture: ComponentFixture<TemaCurs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaCurs3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaCurs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
