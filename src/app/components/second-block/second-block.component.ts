import { ChangeDetectorRef, Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { ButtonComponent } from '../button/button.component';
import { MainService } from '../../services/main/main.service';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [BlockComponent, ButtonComponent],
  templateUrl: './second-block.component.html',
  styleUrl: './second-block.component.scss',
})
export class SecondBlockComponent {
  constructor(private mainService: MainService) {}

  handlePasteCategory() {
    this.mainService.pasteCategory();
  }

  handleReplaceCategory() {
    this.mainService.replaceCategory();
  }
}
