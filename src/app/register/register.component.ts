import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { finalize, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  rollNo: string = '';
  name: string = '';
  department: number | null = null; // Updated department field to be a number or null
  year: number | null = null; // Updated year field to be a number or null
  email: string = '';
  password: string = '';
  error: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onRegister() {
    this.isLoading = true; 
    this.authService
    .register(this.rollNo,this.name,this.department,this.year,this.email,this.password,)
    .pipe(
      switchMap((response)=>{
        if (response.success) {
          this.router.navigate(['/login']);
          console.log(response)
          return of(null);
        } else {
          // Registration failed, handle the error message
          this.error = 'Registration failed: ' + response.message;
          return of(null); // Return an empty observable to complete the chain
        }
      }),
      catchError((error) => {
        // Handle registration errors (e.g., network error)
        console.error('An error occurred during registration:', error);
        this.error = 'An error occurred during registration.';
        return of(null); // Return an empty observable to complete the chain
      }),
      finalize(() => {
        this.isLoading = false; // Set loading state to false regardless of success or failure
      })
    ).subscribe();

    this.clearForm();
  }

  clearForm() {
    this.rollNo = '';
    this.name = '';
    this.department = null;
    this.year = null;
    this.email = '';
    this.password = '';
    this.error = '';
  }

  onLog(){
    this.router.navigate(['/']);
  }
}
