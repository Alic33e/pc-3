import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TipsComponent } from './tips/tips.component';
import { OrganicComponent } from './organic/organic.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent, TipsComponent, OrganicComponent, ContactComponent, BlogComponent, AboutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  containerColor: string = '#f7f7f7';
  items: string[] = []; // Lista de elementos
  newItem: string = ''; // Valor del input

  changeContainerColor(): void {
    this.containerColor = this.generateRandomColor();
  }

  generateRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  addItem(): void {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = ''; // Limpiar el input después de agregar
    }
  }
}
