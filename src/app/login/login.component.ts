import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';
  isLoading: boolean = false; // Track loading state

  constructor(private authService: AuthService, private router: Router, private dataService: DataService, private location:Location ) {}


  onLogin() {
    this.isLoading = true; // Set loading state to true

    this.authService
      .login(this.username, this.password)
      .pipe(
        switchMap((response) => {
          if (response.success) {
            
            console.log(response.user)
            this.dataService.setSharedData1(response.user);
            this.dataService.setSharedData2(response.dept);
            this.router.navigate([{outlets:{dashboard:'dashboard'}}]); 
            console.log(response)// Redirect to the dashboard page
            return of(null); // Return an empty observable to complete the chain
          } else {
            // Authentication failed, handle the error message
            this.error = response.message;
            
            return of(null); // Return an empty observable to complete the chain
          }
        }),
        catchError((error) => {
          // Handle login errors
          console.error('An error occurred during login:', error);
          this.error = error.message;
          return of(null); // Return an empty observable to complete the chain
        }),
        finalize(() => {
          this.isLoading = false; // Set loading state to false regardless of success or failure
        })
      )
      .subscribe();
  }

  ngOnInit() {
    // Disable the browser's back and forward buttons
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, '', window.location.href);
    };
  }
   
  ngOnDestroy() {
    window.onpopstate = null;
  }

  onReg(){
    this.router.navigate(['/register']);
  }
}

