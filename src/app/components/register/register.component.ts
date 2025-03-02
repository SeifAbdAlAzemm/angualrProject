import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {username: '', email: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    
    this.authService.register(this.user).subscribe(
      response => {
        if(response.token){
          this.router.navigate(['/sign-in']);
        }
        
      },
      error => {
        this.errorMessage = 'Registration failed!';
      }
    );
  }
}
