import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);

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

    return this.name.hasError('email') ? 'This is not a valid' : '';
  }
}
