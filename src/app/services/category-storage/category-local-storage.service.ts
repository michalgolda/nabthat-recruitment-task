import { Injectable, afterNextRender } from '@angular/core';
import { ICategoryStorage } from './category-storage.interface';
import type { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryLocalStorage implements ICategoryStorage {
  private categories: Category[] = [];

  constructor() {
    afterNextRender(() => {
      this.initializeCategories();
    });
  }

  private initializeCategories(): void {
    const categoriesFromLocalStorage = this.getCategoriesFromLocalStorage();
    if (categoriesFromLocalStorage) {
      this.categories = categoriesFromLocalStorage;
      return;
    }

    const categoriesFromFile = this.getCategoriesFromFile();
    this.categories = categoriesFromFile;
    this.syncWithLocalStorage();
  }

  private getCategoriesFromLocalStorage(): Category[] | null {
    const categoriesString = localStorage.getItem('categories');
    const categories = categoriesString ? JSON.parse(categoriesString) : null;

    return categories;
  }

  public getCategoriesFromFile(): Category[] {
    return [
      {
        name: 'Technologia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Sztuczna inteligencja',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Medycyna',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Programowanie',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        name: 'Biznes',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ];
  }

  private syncWithLocalStorage(): void {
    const categoriesString = JSON.stringify(this.categories);
    localStorage.setItem('categories', categoriesString);
  }

  create(category: Category): void {
    this.categories.push(category);
    this.syncWithLocalStorage();
  }

  getAll(): Category[] {
    return this.categories;
  }

  update(name: string, category: Category): void {
    const categoryIndex = this.categories.findIndex((c) => c.name === name);

    if (categoryIndex !== -1) {
      this.categories[categoryIndex] = category;
    }

    this.syncWithLocalStorage();
  }

  delete(name: string): void {
    this.categories = this.categories.filter((c) => c.name !== name);
    this.syncWithLocalStorage();
  }

  getByName(name: string): Category | null {
    const category = this.categories.find((c) => c.name === name);
    return category ? category : null;
  }

  reset(): void {
    this.categories = this.getCategoriesFromFile();
    this.syncWithLocalStorage();
  }
}
