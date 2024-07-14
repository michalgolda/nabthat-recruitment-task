import type { Category } from '@app/models/category.model';

export interface ICategoryStorage {
  create(category: Category): void;
  update(name: string, category: Category): void;
  delete(name: string): void;
  getAll(): Category[];
  getByName(name: string): Category | null;
  reset(): void;
}
