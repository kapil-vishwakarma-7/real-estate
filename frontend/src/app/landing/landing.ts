import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {
  private fb = inject(FormBuilder);

  submitted = false;

  readonly inquiryForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    area: [0],
    budget: [250000],
    locality: ['']
  });

  submit(): void {
    if (this.inquiryForm.valid) {
      console.log('Inquiry', this.inquiryForm.value);
      this.submitted = true;
      this.inquiryForm.reset({ area: 0, budget: 250000 });
      setTimeout(() => (this.submitted = false), 4000);
    } else {
      this.inquiryForm.markAllAsTouched();
    }
  }
}
