import { CategoryEntity } from '../../category/entities/category.entity';

export class ReturnCategory {
  id: number;
  name: string;

  constructor(categoryEnity: CategoryEntity) {
    this.id = categoryEnity.id;
    this.name = categoryEnity.name;
  }
}
