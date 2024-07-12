import { Component } from '@angular/core';
import { BlockComponent } from '@app/pages/index/components/block/block.component';
import { RadioFieldComponent } from '@app/components/radio-field/radio-field.component';
import { MainService } from '@app/services/main/main.service';
import { CategoryGettingStrategy } from '@app/models/state.model';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [BlockComponent, RadioFieldComponent],
  templateUrl: './first-block.component.html',
  styleUrl: './first-block.component.scss',
})
export class FirstBlockComponent {
  categoryGettingStrategies = {
    first: CategoryGettingStrategy.FIRST,
    second: CategoryGettingStrategy.SECOND,
    random: CategoryGettingStrategy.RANDOM,
  };

  constructor(private mainService: MainService) {}

  handleChangeCategoryGettingStrategy(event: any) {
    this.mainService.setCategoryGettingStrategy(event.target.value);
  }
}
