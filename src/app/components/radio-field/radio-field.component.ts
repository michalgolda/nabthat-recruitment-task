import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-field',
  standalone: true,
  imports: [],
  templateUrl: './radio-field.component.html',
  styleUrl: './radio-field.component.scss',
})
export class RadioFieldComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) value: string = '';
}
