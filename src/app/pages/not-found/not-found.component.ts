import { Component } from '@angular/core';
import { PageTitleComponent } from '@app/components/page-title/page-title.component';
import { ButtonComponent } from '@app/components/button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [PageTitleComponent, ButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
