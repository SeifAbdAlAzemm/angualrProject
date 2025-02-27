import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { HomeComponent } from './components/home/home.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'team', component: TeamSectionComponent },
  { path: 'shop', component: ProductsSectionComponent },
  { path: '**', component: NotFoundComponent },  // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // forRoot() for main routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
