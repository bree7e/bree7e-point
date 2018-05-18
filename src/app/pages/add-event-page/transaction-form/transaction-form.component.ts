import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Currencies } from 'src/app/shared/currencies.enum';

@Component({
    selector: 'app-transaction-form',
    templateUrl: './transaction-form.component.html',
    styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
    public currencies = Currencies;
    public form: FormGroup;

    constructor(public fb: FormBuilder) {
      this.form = this.fb.group({
        currency: [Currencies.RUB, Validators.required],
        amount: ['', Validators.required],
        agent: ['', Validators.required],
        date:  ['', Validators.required],
        description: ''
      });
    }

    ngOnInit() {}
}
