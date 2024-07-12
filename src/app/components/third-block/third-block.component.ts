import { Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { CategoryComponent } from '../category/category.component';
import type { Category } from '../../models/category.model';
import { MainService } from '../../services/main/main.service';

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
