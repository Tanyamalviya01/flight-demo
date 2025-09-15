

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
// Firebase imports
import { Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email: string = '';
  password: string = '';
  error: string = '';

  // ✅ inject Firebase Auth
  private auth: Auth = inject(Auth);
  private router = inject(Router);

  async loginEmail() {
    if (!this.email || !this.password) {
      this.error = 'Email and password are required!';
      return;
    }

    try {
      const userCred = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('✅ Logged in:', userCred.user);
      this.error = '';
      // Redirect to flight-form after successful login
      this.router.navigate(['/flight-form']);
    } catch (err: any) {
      console.error(err);
      this.error = err.message || 'Failed to login';
    }
  }

  async loginGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const userCred = await signInWithPopup(this.auth, provider);
      console.log('✅ Google login success:', userCred.user);
      this.error = '';
      // Redirect to flight-form after successful Google login
      this.router.navigate(['/flight-form']);
    } catch (err: any) {
      // Handle popup closed by user gracefully
      if (err.code === 'auth/popup-closed-by-user') {
        this.error = 'Google login popup was closed before completing sign-in.';
      } else {
        console.error(err);
        this.error = err.message || 'Google login failed';
      }
    }
  }
}
