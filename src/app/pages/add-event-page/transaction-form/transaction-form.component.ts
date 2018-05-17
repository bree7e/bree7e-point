import { Component, OnInit } from '@angular/core';
import { Currencies } from 'src/app/shared/currencies.enum';

@Component({
    selector: 'app-transaction-form',
    templateUrl: './transaction-form.component.html',
    styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
    public currencies = Currencies;

    constructor() {}

    ngOnInit() {}
}
