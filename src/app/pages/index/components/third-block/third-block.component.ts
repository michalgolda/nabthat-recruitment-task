import { Component } from '@angular/core';
import { BlockComponent } from '@app/pages/index/components/block/block.component';
import { CategoryComponent } from '@app/pages/index/components/category/category.component';
import { MainService } from '@app/services/main/main.service';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [BlockComponent, CategoryComponent],
  templateUrl: './third-block.component.html',
  styleUrl: './third-block.component.scss',
})
export class ThirdBlockComponent {
  constructor(public mainService: MainService) {}
}
