import { Injectable } from '@angular/core';
import { Auth as FirebaseAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private auth: FirebaseAuth) {}

  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  logout() {
    return this.auth.signOut();
  }
}
