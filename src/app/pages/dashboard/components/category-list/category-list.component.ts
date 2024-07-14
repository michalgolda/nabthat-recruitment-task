import { Component, Inject } from '@angular/core';
import { ButtonComponent } from '@app/components/button/button.component';
import type { Category } from '@app/models/category.model';
import { CATEGORY_STORAGE } from '@app/services/category-storage';
import type { ICategoryStorage } from '@app/services/category-storage/category-storage.interface';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent {
  constructor(
    @Inject(CATEGORY_STORAGE)
    public categoryStorage: ICategoryStorage
  ) {}

  handleEditCategory(category: Category): void {
    const categoryName = prompt('Enter the new category name', category.name);
    const categoryDescription = prompt(
      'Enter the new category description',
      category.description
    );

    if (categoryName && categoryDescription) {
      const existingCategory = this.categoryStorage.getByName(categoryName);

      if (existingCategory && categoryName !== category.name) {
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
