import { Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { RadioFieldComponent } from '../radio-field/radio-field.component';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [BlockComponent, RadioFieldComponent],
  templateUrl: './first-block.component.html',
  styleUrl: './first-block.component.scss',
})
export class FirstBlockComponent {}
