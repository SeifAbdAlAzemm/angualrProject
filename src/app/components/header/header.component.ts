import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
interface Header {
  title: string;
  description: string;
  buttonText: string;
  buttonLink:string;
  translationKeyTitle: string;
  translationKeyDesc: string;
  translationKeyButtontext: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

  languages = [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'ar', name: 'العربية' }
    ];
    currentLang: string;
    header: Header[] = [];

  constructor(
  
      public languageService: LanguageService
    ) {    this.currentLang = this.languageService.getCurrentLanguage();}
    
    updateHeader(): void {{
  
      this.header= [
        {title:'E-Market',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          buttonText:'Learn More',buttonLink:'/',translationKeyTitle:'HEADER.TITLE', translationKeyDesc: 'HEADER.DESC',
          translationKeyButtontext: 'HEADER.BUTTONTEXT'}
      ]
    }}
    ngOnInit(): void {
      this.updateHeader();}
  
  
    switchLanguage(lang: string) {
      this.languageService.changeLanguage(lang);
      this.currentLang = lang;
      // Update nav links to reflect language change
      this.updateHeader();
    }
    
}
