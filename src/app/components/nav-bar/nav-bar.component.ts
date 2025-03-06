import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';


// Define a new interface for navigation links that includes translationKey
interface NavLink {
  name: string;
  url: string;
  translationKey: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  [x: string]: any;

  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];
  currentLang: string;

  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.currentLang = lang;
    // Update nav links to reflect language change
    this.updateNavLinks();
  }

  logoSrc: string = '../../../assets/logo.png';
  navLinks: NavLink[] = [];
  authSubscription!: Subscription; 

  constructor(
    public authService: AuthService, 
    private router: Router,
    public languageService: LanguageService
  ) {
    this.currentLang = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    this.updateNavLinks(); // Initial check

    // Subscribe to authentication status changes
    this.authSubscription = this.authService.authStatus$.subscribe(() => {
      this.updateNavLinks();
    });
  }

  updateNavLinks(): void {
    if (this.authService.isLoggedIn()) {
      this.navLinks = [
        { name: 'Home', url: '', translationKey: 'NAV.HOME' },
        { name: 'Shop', url: 'shop', translationKey: 'NAV.PRODUCTS' },
        { name: 'Team', url: 'team', translationKey: 'NAV.TEAM' }
      ];
    } else {
      this.navLinks = [
        { name: 'Home', url: '', translationKey: 'NAV.HOME' },
        { name: 'Register', url: 'register', translationKey: 'NAV.REGISTER' },
        { name: 'Sign in', url: 'sign-in', translationKey: 'NAV.LOGIN' }
      ];
    }
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