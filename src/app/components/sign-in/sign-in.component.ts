import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signIn(): void {
    this.authService.signIn(this.credentials).subscribe(
      response => {
        if(response.token){
          this.authService.saveToken(response.token);
          this.router.navigate(['/']);
        }
      },
      error => {
        this.errorMessage = 'Invalid email or password!';
      }
    );
  }
}
