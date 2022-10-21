import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//As div 
  //selector: '[app-servers]', //As element in HTML
  //selector: '.app-servers', //As class in HTML
  templateUrl: './servers.component.html',
  /*template:`<app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = "";
  serverCreated = false;
  servers = ['test1', 'test2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreationServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
