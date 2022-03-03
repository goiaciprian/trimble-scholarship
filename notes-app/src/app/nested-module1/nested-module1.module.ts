import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedModule2Module } from '../nested-module2/nested-module2.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NestedModule2Module],
})
export class NestedModule1Module {}
