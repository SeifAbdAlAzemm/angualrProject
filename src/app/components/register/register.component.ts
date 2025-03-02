import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {id: 0, username: '', email: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

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
