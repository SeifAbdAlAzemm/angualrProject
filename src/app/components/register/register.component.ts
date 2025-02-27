import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {id: 0, username: '', email: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    
    this.authService.register(this.user).subscribe(
      response => {
        this.authService.saveToken(response.id);
        this.router.navigate(['/sign-in']);
      },
      error => {
        this.errorMessage = 'Registration failed!';
      }
    );
  }
}
