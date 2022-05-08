import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from '@angular/cdk/layout';
import {AuthService} from "./shared/services/auth.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  loggedInUser?: firebase.default.User | null;

  constructor(private observer: BreakpointObserver, private authService: AuthService) {
  }

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    }, error => {
      console.error(error)
    })
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  logout(){
    this.authService.logout().then(() => {
      console.log('Logged out.');
    }).catch(error => {
      console.error(error);
    });
  }
}
