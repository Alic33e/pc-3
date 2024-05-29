import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  tasks: { text: string; imageUrl: string; description: string, email: string }[] = [];
  newTask: string = '';
  newImageUrl: string = '';
  newDescription: string = '';
  newEmail: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        text: this.newTask.trim(),
        imageUrl: this.newImageUrl.trim(),
        description: this.newDescription.trim(),
        email: this.newEmail.trim(),
      });
      this.newTask = '';
      this.newImageUrl = '';
      this.newDescription = '';
      this.newEmail = ''; // Limpiar el campo de descripción
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

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
