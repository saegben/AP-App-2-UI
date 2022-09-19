import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {}

    observe(): Observable<any> {
        let url = "http://localhost:8080/";
        return this.http.get<any>(url);
    }
    
}