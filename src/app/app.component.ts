import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstBlockComponent } from './components/first-block/first-block.component';
import { SecondBlockComponent } from './components/second-block/second-block.component';
import { ThirdBlockComponent } from './components/third-block/third-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PageTitleComponent,
    FooterComponent,
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nathab-recruitment-task';
}
