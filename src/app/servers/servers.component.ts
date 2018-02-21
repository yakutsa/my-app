import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  showText = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  toggleParagraph() {
    if (this.showText === true) {
      this.showText = false;
    } else {
      this.showText = true;
    }
  }

  /*onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }*/

}
