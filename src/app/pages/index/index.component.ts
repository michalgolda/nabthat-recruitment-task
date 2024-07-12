import { Component } from '@angular/core';
import { PageTitleComponent } from '@app/components/page-title/page-title.component';
import { FirstBlockComponent } from '@app/pages/index/components/first-block/first-block.component';
import { SecondBlockComponent } from '@app/pages/index/components/second-block/second-block.component';
import { ThirdBlockComponent } from '@app/pages/index/components/third-block/third-block.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    PageTitleComponent,
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {}
