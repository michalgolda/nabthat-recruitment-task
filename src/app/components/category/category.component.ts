import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) description: string = '';
}
