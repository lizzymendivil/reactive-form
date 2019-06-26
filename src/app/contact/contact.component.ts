import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CustomValidator } from '../validators/custom-validator';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  emailPattern: any = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
  userNamePattern: any = '^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$';
  MIN_AGE = 18;
  MAX_AGE = 60;

  constructor(private fb: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.buildForm();
  }
  
  buildForm() {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      userName: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(this.userNamePattern)]],
      age: [null, [Validators.required, CustomValidator.validAgeRange(this.MIN_AGE, this.MAX_AGE)]],
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      website: [null, [Validators.required, CustomValidator.validateUrl]],
      address: [null]
    });
  }

  onSubmit() {
    console.log(this.contactForm.controls);
    this.data.save(this.contactForm.value);
    this.onReset();
  }

  onReset() {
    this.contactForm.reset();
  }

  get f() { return this.contactForm.controls; }

}
