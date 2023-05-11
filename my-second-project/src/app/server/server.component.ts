import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus='No server is created';
  serverName="";
  serverCreated =false;
  servers=['Testing','Testing work']
  constructor(){
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
    
  }


  // appId: number= 25873;
  // appStatus: string= 'offline';

  // getserver(){
  //   return this.appStatus;
  // }

  onCreateServer(){
    this.serverCreationStatus ="Yes Server was created!" + this.serverName;
    // this.serverName='';
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event : Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}

