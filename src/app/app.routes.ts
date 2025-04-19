import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'الصفحة الرئيسية' },
  { path: 'about-us', component: AboutUsComponent, title: 'من نحن' },
  { path: 'services', component: ServicesComponent, title: 'خدماتنا' },
  { path: 'projects', component: ProjectsComponent, title: 'مشاريعنا' },
  { path: 'contact-us', component: ContactUsComponent, title: 'اتصل بنا' },
  { path: '**', redirectTo: '' }
];
