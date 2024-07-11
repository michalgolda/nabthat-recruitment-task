import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  @Input() title: string = '';
}
