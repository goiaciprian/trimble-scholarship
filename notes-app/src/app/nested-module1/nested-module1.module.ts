import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedModule2Module } from '../nested-module2/nested-module2.module';
import { Nested3Component } from '../nested3/nested3.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, NestedModule2Module],
  exports: [Nested3Component],
})
export class NestedModule1Module {}
