import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Injectable()
export class TaskManagementService {
    constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {

    }

    getAllTasks() {
        const url =  "https://localhost:5001/api/Task";
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.get(url,{headers: headers});
    }

    public addTask(registerBody:any) {
        const url = "https://localhost:5001/api/Task";
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.post(url, registerBody,  { responseType: 'text', headers: headers });
    }

    public deleteTask(id: string) {
        const url = `https://localhost:5001/api/Task/${id}`;
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.delete(url, { responseType: 'text', headers: headers });
    }

    public updateTask(registerBody:any) {
        const url = "https://localhost:5001/api/Task";
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.put(url, registerBody,  { responseType: 'text', headers: headers });
    }
}