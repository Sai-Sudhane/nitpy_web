import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      rollNumber: ['', [Validators.required]],
      department: [''],
      roomNumber: [''],
      placeOfVisit: [''],
      daysLeave: ['', [Validators.required, Validators.min(1)]],
      leavingDate: [''],
      returningDate: ['']
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Form is valid, perform your action here (e.g., submit data)
      console.log('Form submitted:', this.form.value);
    } else {
      // Form is invalid, display error messages or take appropriate action
    }
  }
}
