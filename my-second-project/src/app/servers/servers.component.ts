import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverStatus: string = 'offline';
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'; 
  }
}
