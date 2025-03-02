import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  logoSrc: string = '../../../assets/logo.png';
  navLinks: { name: string; url: string }[] = [];
  authSubscription!: Subscription; 

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.updateNavLinks(); // Initial check

    // Subscribe to authentication status changes
    this.authSubscription = this.authService.authStatus$.subscribe(() => {
      this.updateNavLinks();
    });
  }

  updateNavLinks(): void {
    this.navLinks = this.authService.isLoggedIn()
      ? [
          { name: 'Home', url: '' },
          { name: 'Shop', url: 'shop' },
          { name: 'Team', url: 'team' }
        ]
      : [
          { name: 'Home', url: '' },
          { name: 'Register', url: 'register' },
          { name: 'Sign in', url: 'sign-in' },
        ];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe(); // Prevent memory leaks
    }
  }
}
