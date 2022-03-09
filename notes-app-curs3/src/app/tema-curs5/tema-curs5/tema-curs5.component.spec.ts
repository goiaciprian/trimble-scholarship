import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaCurs5Component } from './tema-curs5.component';

describe('TemaCurs5Component', () => {
  let component: TemaCurs5Component;
  let fixture: ComponentFixture<TemaCurs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaCurs5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaCurs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
