import { Component } from "@angular/core";
import { AuthenticationService } from "../shared/services/authentication.service";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
    constructor(private authenticationService: AuthenticationService) {

    }
    isLoggedIn() {
      return this.authenticationService.isLoggedIn();
    }
}