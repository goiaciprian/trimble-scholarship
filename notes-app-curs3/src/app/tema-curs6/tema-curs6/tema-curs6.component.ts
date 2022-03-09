import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryJSON } from '../query-json';

@Component({
  selector: 'app-tema-curs6',
  templateUrl: './tema-curs6.component.html',
  styleUrls: ['./tema-curs6.component.scss'],
})
export class TemaCurs6Component implements OnInit {
  routeParameter: any = '';
  queryParams: QueryJSON[] = [];

  constructor(private _router: Router, private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parameter) => {
      this.routeParameter = parameter['variable'];
    });
    this._activeRoute.queryParams.subscribe((params) => {
      Object.keys(params).forEach((key) => {
        this.queryParams.push({ key, value: params[key] });
      });
    });
  }
}
