import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  title: string = 'dadada';
  titleColor: string = 'red';
  noteContent: string = 'asdasd';

  constructor() {}

  ngOnInit(): void {}

  setTitle(): void {
    this.title = 'new title';
  }
}
