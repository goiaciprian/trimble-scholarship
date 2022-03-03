import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nested2Component } from '../nested2/nested2.component';
import { NestedModule3Module } from '../nested-module3/nested-module3.module';

@NgModule({
  declarations: [Nested2Component],
  imports: [CommonModule, NestedModule3Module],
  exports: [Nested2Component],
})
export class NestedModule2Module {}
