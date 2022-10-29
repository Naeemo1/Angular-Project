import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  //ViewEncapsulation.Emulated:Default, ViewEncapsulation.None: the css style will be global now not for this component only
})
export class ServerElementComponent implements OnInit {
  //Decerator with Alias name 'srvElement'
  @Input('srvElement') element: {type:string,name:string,content:string};

  constructor() { }

  ngOnInit(): void {
  }

}
