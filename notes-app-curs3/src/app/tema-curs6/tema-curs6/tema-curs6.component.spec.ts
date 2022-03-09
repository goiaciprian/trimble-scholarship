import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaCurs6Component } from './tema-curs6.component';

describe('TemaCurs6Component', () => {
  let component: TemaCurs6Component;
  let fixture: ComponentFixture<TemaCurs6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaCurs6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaCurs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
