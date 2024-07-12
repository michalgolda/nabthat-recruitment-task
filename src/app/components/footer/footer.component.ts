import { Component } from '@angular/core';
import { ActionsComponent } from './actions/actions.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ActionsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
