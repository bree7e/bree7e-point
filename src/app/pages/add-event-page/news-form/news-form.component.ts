import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  public form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      date: '',
      content: ''
    });
  }

  ngOnInit() {
  }

}
