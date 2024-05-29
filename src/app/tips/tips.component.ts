import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/form']);
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
