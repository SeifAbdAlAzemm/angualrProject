import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Footer {
  name: string;
  translationKey: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  languages = [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'ar', name: 'العربية' }
    ];
    currentLang: string;
    footer: Footer[] = [];
  constructor(
  
      public languageService: LanguageService
    ) {    this.currentLang = this.languageService.getCurrentLanguage();}
    
    updateFooter(): void {{
  
      this.footer= [
        {name:'© 2024 E-Market. All rights reserved.',translationKey:'FOOTER.TEXT' }
      ]
      
    }}
    ngOnInit(): void {
      this.updateFooter();}
  
  
    switchLanguage(lang: string) {
      this.languageService.changeLanguage(lang);
      this.currentLang = lang;
      // Update nav links to reflect language change
      this.updateFooter();
    }
}
