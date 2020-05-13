import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  Phone = new FormControl('', [Validators.required]);
  address = new FormControl('');
  rooms = new FormControl('');
  Register: FormGroup;

  ngOnInit() {
    this.Register = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'name': new FormControl('', [Validators.required]),
      'Phone': new FormControl('', [Validators.required]),
      'address': new FormControl(''),
      'rooms': new FormControl('')
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'This is not a valid' : '';
  }

  getErrorText() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'This is not a valid' : '';
  }

    getPhoneError() {
    if (this.Phone.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Phone.hasError('Phone') ? 'This is not a valid' : '';
  }

  onSubmit() {
    this.Register.patchValue({
      name: this.name.value,
      email: this.email.value,
      address: this.address.value,
      Phone: this.Phone.value,
      rooms: this.rooms.value
    });
    console.log(this.Register);
  }
}
