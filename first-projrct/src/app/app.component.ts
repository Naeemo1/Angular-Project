import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//  styles: [`

//   h3{
//        color:Red
//      }

//`]
})
export class AppComponent {
  serverElements = [{type:'server',name:'Testserver',content:'Just a test!'}];

  title = 'first-project';

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueData.serverName,
      content: blueData.serverContent
    });
  }
}
