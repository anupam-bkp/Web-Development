import { Injectable, Output, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

// Use of @Injectable decorator to inject another service

@Injectable()
export class AccountsService{

    accounts = [
        {
          name: 'Master Account',
          status: 'active' 
        },
        {
          name: 'TestAccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'hidden'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService){

      }
    
      addAccount(accountName: string, accountStatus: string): void{
          this.accounts.push({name: accountName, status: accountStatus}) 
          this.loggingService.logStatusChanged('AccountService: ' + accountStatus);       
      }

      updateStatus(id: number, accountStatus: string): void{
          this.accounts[id].status = accountStatus;
          this.loggingService.logStatusChanged('AccountService: ' + accountStatus);
      }

}