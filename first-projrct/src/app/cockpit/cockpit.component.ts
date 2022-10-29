import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef
  //properity
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrint = new EventEmitter<{ serverName: string, serverContent: string }>();

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value }); /*serverName is object*/
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrint.emit({ serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  ngOnInit(): void {
  }

}
