import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LanguageService } from '../../services/language.service';

interface Header {
  header: string;
  buttonText: string;
  translationKeyHeader: string;
  translationKeyButtonText: string;
  translationKeyAccount: string;
  translationKeySignin: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
      
      updateRegister(): void {{
    
        this.header= [
          {header: "Register",
           buttonText: "Register",
            translationKeyHeader:"REGISTER.HEADER",
            translationKeyButtonText:"REGISTER.BUTTONTEXT",
            translationKeyAccount:"REGISTER.ACCOUNT",
            translationKeySignin:"REGISTER.SIGNIN"
    }
        ]
        
      }}
      ngOnInit(): void {
        this.updateRegister();}
    
    
      switchLanguage(lang: string) {
        this.languageService.changeLanguage(lang);
        this.currentLang = lang;
        // Update nav links to reflect language change
        this.updateRegister();
      }

  user: User = {id: 0, username: '', email: '', password: '' };
  errorMessage: string = '';

  register(): void {
    
    this.authService.register(this.user).subscribe(
      response => {
        if(response.id){
          this.router.navigate(['/sign-in']);
        }
        
      },
      error => {
        this.errorMessage = 'Registration failed!';
      }
    );
  }
}
