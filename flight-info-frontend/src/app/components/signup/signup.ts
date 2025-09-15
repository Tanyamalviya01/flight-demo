import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';
  success: string = '';

  private auth: Auth = inject(Auth);
  private router = inject(Router);

  async signupEmail() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.error = 'All fields are required!';
      this.success = '';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match!';
      this.success = '';
      return;
    }
    try {
      const userCred = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      this.error = '';
      this.success = 'Signup successful! Redirecting to login...';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1200);
    } catch (err: any) {
      this.success = '';
      this.error = err.message || 'Failed to sign up';
    }
  }
}
