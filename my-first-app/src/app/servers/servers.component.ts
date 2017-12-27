import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-servers",
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  status = 'turned off';
  name = 'two-way databinding';
  userName = '';
  created = false;
  servers= ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onStartServer() {
    this.status = `Server ${ this.name } started!`;
    this.created = true;
    this.servers.push(this.name);
  }

  onUpdateServerName(event: any) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  isUserNameEmpty() {
    return !this.userName;
  }

  onUserSaved() {
    this.userName = '';
  }
}
