import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private supportedLanguages = ['en', 'fr', 'ar'];

  constructor(private translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('en');
    
    // Try to get browser language
    const browserLang = translate.getBrowserLang();
    if (browserLang && this.supportedLanguages.includes(browserLang)) {
      translate.use(browserLang);
    } else {
      translate.use('en');
    }
    
    // For RTL support (Arabic)
    this.setDocumentDirection(translate.currentLang);
  }

  changeLanguage(lang: string) {
    if (this.supportedLanguages.includes(lang)) {
      this.translate.use(lang);
      this.setDocumentDirection(lang);
      localStorage.setItem('preferredLanguage', lang);
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  getAvailableLanguages() {
    return this.supportedLanguages;
  }

  private setDocumentDirection(lang: string) {
    // Set RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }
  }
}