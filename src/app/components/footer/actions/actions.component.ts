import { Component, Inject } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { MainService } from '../../../services/main/main.service';
import { ICategoryStorage } from '@app/services/category-storage/category-storage.interface';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  constructor(
    private mainService: MainService,
    @Inject('ICategoryStorage') private categoryStorage: ICategoryStorage
  ) {}

  handleShowPersonaldata(): void {
    this.mainService.showPersonalData();
  }

  handleResetSettings(): void {
    this.mainService.resetState();
    this.categoryStorage.reset();
  }
}
