import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedModule1Module } from '../nested-module1/nested-module1.module';
import { NestedModule2Module } from '../nested-module2/nested-module2.module';
import { NestedModule3Module } from '../nested-module3/nested-module3.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NestedModule1Module,
    NestedModule2Module,
    NestedModule3Module,
  ],
  exports: [NestedModule1Module, NestedModule2Module, NestedModule3Module],
})
export class SharedModule {}
