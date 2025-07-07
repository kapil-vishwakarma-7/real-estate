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

  readonly inquiryForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    area: [''],
    budget: [''],
    locality: ['']
  });

  submit(): void {
    if (this.inquiryForm.valid) {
      console.log('Inquiry', this.inquiryForm.value);
      alert('Thank you for your inquiry!');
      this.inquiryForm.reset();
    }
  }
}
