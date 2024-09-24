import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { FormHistoryComponent } from './form-history/form-history.component';
import { TemplatesComponent } from './templates/templates.component';

export const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create-form', component: FormCreatorComponent },
  { path: 'form-history', component: FormHistoryComponent },
  { path: 'templates', component: TemplatesComponent }
];