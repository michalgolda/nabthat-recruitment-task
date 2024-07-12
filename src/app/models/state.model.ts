import type { Category } from './category.model';

export enum CategoryGettingStrategy {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  RANDOM = 'RANDOM',
}

export type State = {
  visibleCategories: Category[];
  categoryGettingStrategy: CategoryGettingStrategy | null;
};
