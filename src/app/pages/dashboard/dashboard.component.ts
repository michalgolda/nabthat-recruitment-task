import { Component } from '@angular/core';
import { PageTitleComponent } from '@app/components/page-title/page-title.component';
import { ButtonComponent } from '@app/components/button/button.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryMemoryStorageService } from '@app/services/category-storage/category-memory-storage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PageTitleComponent, ButtonComponent, CategoryListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private categoryStorage: CategoryMemoryStorageService) {}

  handleCreateNewCategory(): void {
    const categoryName = prompt('Enter a new category name');
    const categoryDescription = prompt(
      'Enter a description for the new category'
    );

    if (categoryName && categoryDescription) {
      const existingCategory = this.categoryStorage.getByName(categoryName);

      if (existingCategory) {
        window.alert(`Category "${categoryName}" already exists.`);
        return;
      }

      this.categoryStorage.create({
        name: categoryName,
        description: categoryDescription,
      });
    }
  }
}
