import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles:[`
        .online{
            color:white;
        }
    `]
})
export class ServerComponent{

    serverId: number = 10;
    serverStatus = 'offline';
    serverOnStatus = 'online'
    serverOffStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerOffStatus() {
        return this.serverOffStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
     }

}