import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  isHomeVisible(): boolean {
    // Determine if the home component should be visible based on the current route
    return this.router.url !== '/(dashboard:dashboard)';
  }
}
