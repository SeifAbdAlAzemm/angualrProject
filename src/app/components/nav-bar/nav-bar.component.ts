import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public authService: AuthService, private router: Router) {}

  // Dynamic logo source
  logoSrc: string = '../../../assets/logo.png';

  // Dynamic navigation links
  navLinks = [
    { name: 'Home', url: '' },
    { name: 'Register', url: 'register', requiresAuth: false },
    { name: 'Sign in', url: 'sign-in', requiresAuth: false },
    { name: 'Shop', url: 'shop', requiresAuth: true },
    { name: 'Team', url: 'team', requiresAuth: true }
  ];

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

  shouldDisplayLink(link: { name: string; url: string; requiresAuth?: boolean }): boolean {
    return link.requiresAuth === undefined || link.requiresAuth === this.authService.isLoggedIn();
  }
}
