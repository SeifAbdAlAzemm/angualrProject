import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'E-Market';
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit...';
  buttonText: string = 'Learn More';
  buttonLink: string = '#';
  heroImageSrc: string = '../../../assets/hero-image.jpg';
}
