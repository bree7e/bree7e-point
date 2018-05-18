import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-news-form',
    templateUrl: './news-form.component.html',
    styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
    public form: FormGroup;
    @Output() formChange = new EventEmitter();

    constructor(public fb: FormBuilder) {
        this.form = this.fb.group({
            title: ['', Validators.required],
            date: '',
            content: ''
        });
    }

    ngOnInit() {
        this.form.valueChanges.subscribe(formValues => {
            this.formChange.emit(formValues);
        });
    }
}
