import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Header {
  name: string;
  translationKey: string;
}
@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent {
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
  
  updateProductsHeader(): void {{

    this.header= [
      {name:'Products',translationKey:'PRODUCTS.HEADER' }
    ]
    
  }}
  ngOnInit(): void {
    this.updateProductsHeader();}


  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.currentLang = lang;
    // Update nav links to reflect language change
    this.updateProductsHeader();
  }
}
