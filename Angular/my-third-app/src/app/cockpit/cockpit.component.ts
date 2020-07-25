import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent{

  // @Output('aliasname') decorator to make 
  // this event listenable from other component

   @Output() serverCreated = 
          new EventEmitter<{serverName: string, serverContent: string}>();

   @Output('servBpCreated') blueprintCreated = 
          new EventEmitter<{serverName: string, serverContent: string}>();

    // newServerName = '';
    // newServerContent = '';

   @ViewChild('serverContentInput', {static:true}) serverContent: ElementRef;

    constructor(){
        
    }

    onAddServer(serverNameInput: HTMLInputElement){
      this.serverCreated.emit({
        serverName: serverNameInput.value, 
        serverContent: this.serverContent.nativeElement.value
      });
    }

    onAddBlueprint(serverNameInput: HTMLInputElement){
      this.blueprintCreated.emit({
        serverName: serverNameInput.value, 
        serverContent: this.serverContent.nativeElement.value
      });
    }

}