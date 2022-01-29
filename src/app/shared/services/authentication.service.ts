import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {
    private myStorage:any;
    private readonly authToken = 'authToken';

    constructor() {
        this.myStorage = window.sessionStorage;
    }

    public setAuthToken(value:string) {
        this.myStorage.setItem(this.authToken, value);
    }

    public getAuthToken() {
        return this.myStorage.getItem(this.authToken);
    }

    public clearAuthToken() {
        return this.myStorage.clear();
    }

    public isLoggedIn() {
        if(this.getAuthToken()) {
            return true;
        }
        return false;
    }
}