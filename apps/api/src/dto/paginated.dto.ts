export class PaginateMetadata {
  total: number;
  remaining: number;
  start: number;
  limit: number;
  hasMore: boolean;
  nextStart: number;

  constructor(metadata: PaginateMetadata) {
    Object.assign(this, metadata);
  }
}

export class PaginatedDto<T> {
  metadata: PaginateMetadata;
  data: T[];

  constructor(paginate: PaginatedDto<T>) {
    Object.assign(this, paginate);
  }
}
