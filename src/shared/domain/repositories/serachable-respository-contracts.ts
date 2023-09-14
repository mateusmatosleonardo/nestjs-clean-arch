import { Entity } from '../entities/entity';
import { RepositoryInterface } from './repository-contracts';

export type SearchDirection = 'asc' | 'desc';

export type SearchProps<Filter = string> = {
  page?: number;
  perPage?: number;
  sort?: string | null;
  sortDirection?: SearchDirection | null;
  filter?: Filter | null;
};

export class SearchParams {
  protected _page: number;
  protected _perPage = 15;
  protected _sort: string | null;
  protected _sortDirection: SearchDirection | null;
  protected _filter: string | null;
  constructor(props: SearchProps) {
    this._page = props.page;
    this._perPage = props.perPage;
    this._sort = props.sort;
    this._sortDirection = props.sortDirection;
    this._filter = props.filter;
  }

  get page() {
    return this._page;
  }

  private set page(value: number) {
    return;
  }

  get perPage() {
    return this._perPage;
  }

  private set perPage(value: number) {
    return;
  }

  get sort() {
    return this._sort;
  }

  private set sort(value: string | null) {
    return;
  }

  get sortDirection() {
    return this._sortDirection;
  }

  private set sortDirection(value: SearchDirection | null) {
    return;
  }

  get filter() {
    return this._filter;
  }

  private set filter(value: string | null) {
    return;
  }
}

export interface SearchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SearchOutput,
> extends RepositoryInterface<E> {
  search(props: SearchParams): Promise<SearchOutput>;
}
