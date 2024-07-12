import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { MainService } from '../../../services/main/main.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  constructor(private mainService: MainService) {}

  handleShowPersonaldata(): void {
    this.mainService.showPersonalData();
  }

  handleResetSettings(): void {
    this.mainService.resetState();
  }
}
