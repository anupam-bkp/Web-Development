import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = true;
  serverCreationStatus: string = 'No Server was created!';
  serverName: string = 'TestServer1';
  serverCreated = false;

  servers:string[] = ['TestServer1', 'TestServer2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created successfully! : ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
