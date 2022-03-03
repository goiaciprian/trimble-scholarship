import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nested3Component } from '../nested3/nested3.component';

@NgModule({
  declarations: [Nested3Component],
  imports: [CommonModule],
  exports: [Nested3Component],
})
export class NestedModule3Module {}
