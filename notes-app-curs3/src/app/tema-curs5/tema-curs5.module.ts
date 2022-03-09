import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemaCurs5Component } from './tema-curs5/tema-curs5.component';
import { TemaCursPipePipe } from './tema-curs-pipe/tema-curs-pipe.pipe';
import { TemaCursDirectiveDirective } from './tema-curs-directive/tema-curs-directive.directive';


@NgModule({
  declarations: [TemaCurs5Component, TemaCursPipePipe, TemaCursDirectiveDirective],
  imports: [CommonModule],
  exports: [TemaCurs5Component],
})
export class TemaCurs5Module {}
