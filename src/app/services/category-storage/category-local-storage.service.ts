import { Injectable, afterNextRender } from '@angular/core';
import { ICategoryStorage } from './category-storage.interface';
import type { Category } from '../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryLocalStorage implements ICategoryStorage {
  private categories: Category[] = [];
  private categoriesFromFile: Category[] = [];

  constructor(private httpClient: HttpClient) {
    this.getCategoriesFromFile();

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

    this.categories = [...this.categoriesFromFile];
    this.syncWithLocalStorage();
  }

  private getCategoriesFromLocalStorage(): Category[] | null {
    const categoriesString = localStorage.getItem('categories');
    const categories = categoriesString ? JSON.parse(categoriesString) : null;

    return categories;
  }

  private getCategoriesFromFile(): void {
    this.httpClient.get<Category[]>('/categories.json').subscribe({
      next: (categories) => {
        this.categoriesFromFile = categories;
      },
      error: (error) =>
        console.error('Error fetching categories from file:', error),
    });
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
    this.categories = [...this.categoriesFromFile];
    this.syncWithLocalStorage();
  }
}
