import { Injectable, Inject } from '@angular/core';
import type { State } from '@app/models/state.model';
import { CategoryGettingStrategy } from '@app/models/state.model';
import type { Category } from '@app/models/category.model';
import { deepCopy } from '@app/utils/deep-copy';
import type { ICategoryStorage } from '@app/services/category-storage/category-storage.interface';

const initialState: State = {
  categoryGettingStrategy: null,
  visibleCategories: [],
  showPersonalData: false,
};

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public state: State = deepCopy<State>(initialState);

  constructor(
    @Inject('ICategoryStorage') private categoryStorage: ICategoryStorage
  ) {}

  setCategoryGettingStrategy(method: CategoryGettingStrategy): void {
    this.state = {
      ...this.state,
      categoryGettingStrategy: method,
    };
  }

  pasteCategory() {
    const categoryGettingStrategy = this.state.categoryGettingStrategy;
    if (categoryGettingStrategy) {
      let category = this.getCategory(categoryGettingStrategy);

      if (category) {
        const availableCategories = this.categoryStorage.getAll();
        const allCategoriesIsAlreadyVisible =
          this.state.visibleCategories.length < availableCategories.length;

        if (categoryGettingStrategy === CategoryGettingStrategy.RANDOM) {
          let categoryIsVisible = this.checkCategoryVisibility(category.name);

          while (
            (categoryIsVisible && allCategoriesIsAlreadyVisible) ||
            category === null
          ) {
            category = this.getCategory(categoryGettingStrategy);

            if (category) {
              categoryIsVisible = this.checkCategoryVisibility(category.name);
            }
          }
        } else {
          const existingCategory = this.checkCategoryVisibility(category.name);

          if (existingCategory) {
            window.alert(`Category "${category.name}" already exists.`);
            return;
          }
        }

        if (allCategoriesIsAlreadyVisible) {
          this.state.visibleCategories.push(category);
          this.state.visibleCategories = this.state.visibleCategories.sort(
            (a, b) => a.name.localeCompare(b.name)
          );
        } else {
          window.alert('All categories are already visible.');
        }
      }
    }
  }

  replaceCategory() {
    const categoryGettingStrategy = this.state.categoryGettingStrategy;

    if (categoryGettingStrategy) {
      const category = this.getCategory(categoryGettingStrategy);

      if (category) {
        this.setVisibleCategories([category]);
      }
    }
  }

  getFirstCategory(): Category | null {
    const categories = this.categoryStorage.getAll();
    const firstCategory = categories.length > 0 ? categories[0] : null;
    return firstCategory;
  }

  getSecondCategory(): Category | null {
    const categories = this.categoryStorage.getAll();
    const secondCategory = categories.length > 1 ? categories[1] : null;
    return secondCategory;
  }

  getRandomCategory(): Category | null {
    const categories = this.categoryStorage.getAll();
    const randomCategoryIndex =
      categories.length > 0
        ? Math.floor(Math.random() * categories.length)
        : null;

    const randomCategory =
      randomCategoryIndex !== null ? categories[randomCategoryIndex] : null;
    return randomCategory;
  }

  getCategory(strategy: CategoryGettingStrategy): Category | null {
    switch (strategy) {
      case CategoryGettingStrategy.FIRST:
        return this.getFirstCategory();
      case CategoryGettingStrategy.SECOND:
        return this.getSecondCategory();
      case CategoryGettingStrategy.RANDOM:
        return this.getRandomCategory();
      default:
        return null;
    }
  }

  getVisibleCategories(): Category[] {
    return this.state.visibleCategories;
  }

  setVisibleCategories(categories: Category[]): void {
    this.state.visibleCategories = categories;
  }

  getVisibileCategory(name: string): Category | null {
    const visibleCategory = this.state.visibleCategories.find(
      (c) => c.name === name
    );
    return visibleCategory ? visibleCategory : null;
  }

  checkCategoryVisibility(name: string): boolean {
    return this.state.visibleCategories.some((c) => c.name === name);
  }

  showPersonalData(): void {
    this.state.showPersonalData = true;
  }

  resetState(): void {
    this.state = deepCopy<State>(initialState);
  }
}
