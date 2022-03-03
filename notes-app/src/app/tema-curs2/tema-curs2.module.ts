import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent1Component } from '../dummy-component1/dummy-component1.component';
import { DummyComponent2Component } from '../dummy-component2/dummy-component2.component';

@NgModule({
  declarations: [DummyComponent1Component, DummyComponent2Component],
  imports: [CommonModule],
  exports: [DummyComponent1Component, DummyComponent2Component],
})
export class TemaCurs2Module {}
