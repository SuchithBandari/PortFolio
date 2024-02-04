import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CompaniesWorkedWithComponent } from './companies-worked-with/companies-worked-with.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'Header', component: HeaderComponent },

  { path: 'Contact', component: ContactComponent },
  { path: 'Project', component: ProjectsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Companies', component: CompaniesWorkedWithComponent },
  { path: '**', component: CompaniesWorkedWithComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
