import { Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-third-block',
  standalone: true,
  imports: [BlockComponent],
  templateUrl: './third-block.component.html',
  styleUrl: './third-block.component.scss',
})
export class ThirdBlockComponent {}
