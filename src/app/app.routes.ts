import { Routes } from '@angular/router';
import { JobsComponent } from './Pages/Components/jobs/jobs.component';
import { DetailsComponent } from './Pages/Components/details/details.component';

export const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'app-details/:id', component: DetailsComponent }
];
