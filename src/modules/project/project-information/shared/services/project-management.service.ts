import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Injectable()
export class ProjectManagementService {
    constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {

    }

    getAllProjects() {
        const url =  "https://localhost:5001/api/Project";
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.get(url,{headers: headers});
    }

    public addProject(registerBody:any) {
        const url = "https://localhost:5001/api/Project";
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.post(url, registerBody,  { responseType: 'text', headers: headers });
    }

    public deleteUser(id: string) {
        const url = `https://localhost:5001/api/Project/${id}`;
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.delete(url, { responseType: 'text', headers: headers });
    }

    public updateUser(registerBody:any) {
        const url = "https://localhost:5001/api/Project";
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Authorization', `Bearer ${this.authenticationService.getAuthToken()}`);
        return this.httpClient.put(url, registerBody,  { responseType: 'text', headers: headers });
    }
}