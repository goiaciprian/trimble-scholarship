import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedModule3Module } from '../nested-module3/nested-module3.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NestedModule3Module],
  exports: [NestedModule3Module],
})
export class NestedModule2Module {}
