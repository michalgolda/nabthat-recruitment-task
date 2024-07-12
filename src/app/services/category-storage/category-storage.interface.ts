import type { Category } from '../../models/category.model';

export interface ICategoryStorage {
  create(category: Category): void;
  update(category: Category): void;
  delete(name: string): void;
  getAll(): Category[];
}
