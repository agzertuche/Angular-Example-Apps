import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  name = 'ASDF';
  status = 'offline';

  constructor() {
    this.status = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerName(){
    return `This is server ${ this.name }`;
  }

  getColor() {
    return this.status === 'offline' ? 'red' : 'green';
  }
}