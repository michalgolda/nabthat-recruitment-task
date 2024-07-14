import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryLocalStorage } from './services/category-storage/category-local-storage.service';
import { MainService } from './services/main/main.service';
import { CATEGORY_STORAGE } from './services/category-storage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  providers: [
    MainService,
    { provide: CATEGORY_STORAGE, useClass: CategoryLocalStorage },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nathab-recruitment-task';
}
