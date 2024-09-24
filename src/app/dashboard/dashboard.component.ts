import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule], // Add the imports here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'] // Note: Change styleUrl to styleUrls
})
export class DashboardComponent {
}
