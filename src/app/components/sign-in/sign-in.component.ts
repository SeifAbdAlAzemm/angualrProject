import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface Header {
  header: string;
  buttonText: string;
  translationKeyHeader: string;
  translationKeyButtonText: string;
  translationKeyAccount: string;
  translationKeyRegister: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  languages = [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'ar', name: 'العربية' }
    ];
    currentLang: string;
    header: Header[] = [];
  constructor(
    private authService: AuthService, private router: Router,
      public languageService: LanguageService
    ) {    this.currentLang = this.languageService.getCurrentLanguage();}
    
    updateSignIn(): void {{
  
      this.header= [
        {header: "Sign In",
         buttonText: "Sign In",
          translationKeyHeader:"SIGNIN.HEADER",
          translationKeyButtonText:"SIGNIN.BUTTONTEXT",
          translationKeyAccount:"SIGNIN.ACCOUNT",
          translationKeyRegister:"SIGNIN.REGISTER"
  }
      ]
      
    }}
    ngOnInit(): void {
      this.updateSignIn();}
  
  
    switchLanguage(lang: string) {
      this.languageService.changeLanguage(lang);
      this.currentLang = lang;
      // Update nav links to reflect language change
      this.updateSignIn();
    }

  credentials = { username: '', password: '' };
  errorMessage: string = '';

  signIn(): void {
    this.authService.signIn(this.credentials).subscribe(
      response => {
        if(response.token){
          this.authService.saveToken(response.token);
          this.router.navigate(['/']);
        }
      },
      error => {
        this.errorMessage = 'Invalid username or password!';
      }
    );
  }
}
