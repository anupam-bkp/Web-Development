import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler){
        // console.log('Request is on its way!');
        // console.log(req.url);

        //Inside interceptors we can modify request
        const modifiedRequest = 
            req.clone({headers: req.headers.append('Auth', 'xyz')});

        // return next.handle(req);
        return next.handle(modifiedRequest);
        
        // .pipe(tap(event => {
        //     console.log(event);

        //     if(event.type === HttpEventType.Response){
        //         console.log('Response Arrived, body data: ');
        //         console.log(event.body);
        //     }
        // }));
    }
}

//Interceptor runs before request leaves app
    // and before response is forwarded to subscribe