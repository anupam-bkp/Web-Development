import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../shared-models/logging.service';
import { AccountsService } from '../shared-models/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]  Providing it in App.module
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
            private accountsService: AccountsService){ 

    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: '+ status)
    );
  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) { 
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.logStatusChanged(accountStatus);
  }
}