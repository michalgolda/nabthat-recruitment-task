import { Component } from '@angular/core';
import { PageTitleComponent } from '@app/components/page-title/page-title.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
