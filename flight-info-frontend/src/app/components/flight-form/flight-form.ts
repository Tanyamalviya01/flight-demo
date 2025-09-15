import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface FlightInfoPayload {
  airline: string;
  arrivalDate: string;
  arrivalTime: string;
  flightNumber: string;
  numOfGuests: number;
  comments?: string;
}

@Component({
  selector: 'app-flight-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-form.html',
  styleUrls: ['./flight-form.css']
})
export class FlightForm {
  flightForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.flightForm = this.fb.group({
      airline: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      flightNumber: ['', Validators.required],
      numOfGuests: [1, [Validators.required, Validators.min(1)]],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.flightForm.valid) {
      const payload: FlightInfoPayload = this.flightForm.value;

      // ✅ Place headers here
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
        'candidate': 'Tanya Malviya'
      });

      // ✅ Call Instabase API directly
      this.http.post('https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge', payload, { headers })
        .subscribe({
          next: (res: any) => {
            window.alert(res.message || 'Form submitted successfully ✅');
            this.flightForm.reset(); // reset after success
          },
          error: (err) => {
            window.alert(`Error: ${err.error?.error || err.message}`);
            // this.flightForm.reset(); // reset after error too
            alert(`Error: ${err.error?.error || err.message}`);
          }
        });
    } else {
      alert('Form is invalid ❌');
    }
  }
}
