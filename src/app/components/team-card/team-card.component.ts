import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamMemberComponent {
  @Input() name: string = 'Default Name';
  @Input() role: string = 'Default Role';
  @Input() imageSrc: string = '../../../assets/default-team.png';
}
