import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {

  }

  confirmation = 'YOU WILL BE CONTACTED SOON. THANK YOU';
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  address = new FormControl('');
  rooms = new FormControl('');
  number = new FormControl('');
  Register: FormGroup;

  ngOnInit() {
    this.Register = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'name': new FormControl('', [Validators.required]),
      'address': new FormControl(''),
      'rooms': new FormControl(''),
      'number': new FormControl('')
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
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phone.hasError('Phone') ? 'This is not a valid' : '';
  }

  onSubmit( f: NgForm) {
    this.Register.patchValue({
      name: this.name.value,
      email: this.email.value,
      address: this.address.value,
      rooms: this.rooms.value,
      number: this.number.value
    });

    this.email.reset();
    console.log(this.Register);
  }

  snackBarConfirmation(data: string, action: string) {
    data = this.confirmation;
    action = 'OK';
    this._snackBar.open(data, action, {
      duration: 10000
    });
  }
}

