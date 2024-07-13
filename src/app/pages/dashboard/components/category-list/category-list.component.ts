import { Component } from '@angular/core';
import { ButtonComponent } from '@app/components/button/button.component';
import { CategoryMemoryStorageService } from '@app/services/category-storage/category-memory-storage.service';
import type { Category } from '@app/models/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent {
  constructor(public categoryStorage: CategoryMemoryStorageService) {}

  handleEditCategory(category: Category): void {
    const categoryName = prompt('Enter the new category name', category.name);
    const categoryDescription = prompt(
      'Enter the new category description',
      category.description
    );

    if (categoryName && categoryDescription) {
      const existingCategory = this.categoryStorage.getByName(categoryName);

      if (existingCategory) {
        window.alert(`Category "${categoryName}" already exists.`);
        return;
      }

      this.categoryStorage.update(category.name, {
        name: categoryName,
        description: categoryDescription,
      });
    }
  }

  handleDeleteCategory(categoryName: string): void {
    this.categoryStorage.delete(categoryName);
  }
}
