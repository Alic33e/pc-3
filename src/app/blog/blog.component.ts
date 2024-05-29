import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  navigateToIndex() {
    this.router.navigate(['/index']);
  }
  navigateToOrganic() {
    this.router.navigate(['/organic']);
  }

  navigateToTips() {
    this.router.navigate(['/tips']);
  }
  navigateToBlog() {
    this.router.navigate(['/blog']);
  }
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
