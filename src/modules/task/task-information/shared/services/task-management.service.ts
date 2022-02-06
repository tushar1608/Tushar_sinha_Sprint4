import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Injectable()
export class TaskManagementService {
    constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {

    }
    private getHeaders() {
        return new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
    }

    public getAllTasks() {
        const url =  "https://localhost:5001/api/Task";
        const headers= this.getHeaders();
        return this.httpClient.get(url,{headers: headers});
    }

    public addTask(registerBody:any) {
        const url = "https://localhost:5001/api/Task";
        const headers= this.getHeaders();
        return this.httpClient.post(url, registerBody,  { responseType: 'text', headers: headers });
    }

    public deleteTask(id: string) {
        const url = `https://localhost:5001/api/Task/${id}`;
        const headers= this.getHeaders();
        return this.httpClient.delete(url, { responseType: 'text', headers: headers });
    }

    public updateTask(registerBody:any) {
        const url = "https://localhost:5001/api/Task";
        const headers= this.getHeaders();
        return this.httpClient.put(url, registerBody,  { responseType: 'text', headers: headers });
    }
}