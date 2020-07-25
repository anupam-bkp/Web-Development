import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoggingService } from '../shared-models/logging.service';
import { AccountsService } from '../shared-models/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
            private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string){
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChanged('AccountComponent: ' + status);
    this.accountsService.statusUpdated.emit(status);
  }

}
