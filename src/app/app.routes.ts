import { Routes } from '@angular/router';
import { JobsComponent } from './Pages/Components/jobs/jobs.component';
import { DetailsComponent } from './Pages/Components/details/details.component';
import { PageNotFoundComponent } from './Pages/Components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'app-details/:id', component: DetailsComponent },
  {path:'**',component:PageNotFoundComponent}
];
