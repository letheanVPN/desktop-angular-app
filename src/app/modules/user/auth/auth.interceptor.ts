import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '@module/user/auth/auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
	intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if(AuthService.token.access_token) {
			return next.handle( httpRequest.clone({
				setHeaders: { 'Authorization': AuthService.token.access_token }
			}));
		}
		return next.handle(httpRequest);
	}
}
