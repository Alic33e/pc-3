import { Routes } from '@angular/router';
import { TipsComponent } from './tips/tips.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { OrganicComponent } from './organic/organic.component';

export const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'organic', component: OrganicComponent },
  { path: 'tips', component: TipsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];
