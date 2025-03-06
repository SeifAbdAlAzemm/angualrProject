import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface TeamMembers {
  name: string;
  translationKeyName: string;
  translationKeyRole: string;
  role: string;
  imageSrc:string;
}
interface TeamHeader {
  name: string;
  translationKey: string;
}
@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {
  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];
  currentLang: string;
  teamMembers: TeamMembers[] = [];
  teamHeader: TeamHeader[] = [];
constructor(

    public languageService: LanguageService
  ) {    this.currentLang = this.languageService.getCurrentLanguage();}
  
  updateTeamMembers(): void {{

    this.teamHeader= [
      {name:'Team Members',translationKey:'TEAM.HEADER' }
    ]
    this.teamMembers = [
      { name: 'John Doe',role:"Marketing Manager",imageSrc:"../../../assets/team-01.png", translationKeyName: 'TEAM.MEMBER1.NAME',
        translationKeyRole:"TEAM.MEMBER1.ROLE" },
      { name: 'Jane Smith',role:"Lead Developer",imageSrc:"../../../assets/team-02.png", translationKeyName: 'TEAM.MEMBER2.NAME',
         translationKeyRole:"TEAM.MEMBER2.ROLE" },
      { name: 'Mike Johnson',role:"UI/UX Designer",imageSrc:"../../../assets/team-03.png", translationKeyName: 'TEAM.MEMBER3.NAME',
         translationKeyRole:"TEAM.MEMBER3.ROLE" },

    ]
  }}
  ngOnInit(): void {
    this.updateTeamMembers();}


  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.currentLang = lang;
    // Update nav links to reflect language change
    this.updateTeamMembers();
  }
  
}
