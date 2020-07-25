
// Use either this or add in providers of AppModule
// @Injectable({providedIn: 'root'})

export class LoggingService{

    logStatusChanged(accountStatus: string): void{
        console.log('A server status changed, new status: ' + accountStatus);    
    }

}