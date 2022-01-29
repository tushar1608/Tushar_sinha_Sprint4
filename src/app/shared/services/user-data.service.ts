import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserDataService {
    constructor(private httpClient: HttpClient) {
        
    }

    public registerUser(registerBody:any) {
        const url = "https://localhost:5001/api/User";
        return this.httpClient.post(url, registerBody,  { responseType: 'text' });
    }

    public loginUser(loginBody:any) {
        const url = "https://localhost:5001/api/login";
        return this.httpClient.post(url, loginBody,  { responseType: 'text' });
    }
}