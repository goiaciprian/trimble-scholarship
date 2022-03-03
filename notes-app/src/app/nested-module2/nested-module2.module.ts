import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedModule3Module } from '../nested-module3/nested-module3.module';
import { Nested3Component } from '../nested3/nested3.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, NestedModule3Module],
  exports: [Nested3Component],
})
export class NestedModule2Module {}
