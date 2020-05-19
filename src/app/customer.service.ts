import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class CustomerData {
    constructor(private http: Http) {}
    addData(data: FormGroup) {
        const jsonDataFormat = JSON.stringify(data.value);
        return this.http.post('https://sharon-s-services.firebaseio.com/data.json', jsonDataFormat);
    }
}
