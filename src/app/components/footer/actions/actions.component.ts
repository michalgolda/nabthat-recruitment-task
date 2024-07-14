import { Component, Inject } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { MainService } from '../../../services/main/main.service';
import { ICategoryStorage } from '@app/services/category-storage/category-storage.interface';
import { CATEGORY_STORAGE } from '@app/services/category-storage';

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
    @Inject(CATEGORY_STORAGE) private categoryStorage: ICategoryStorage
  ) {}

  handleShowPersonaldata(): void {
    this.mainService.showPersonalData();
  }

  handleResetSettings(): void {
    this.mainService.resetState();
    this.categoryStorage.reset();
  }
}
