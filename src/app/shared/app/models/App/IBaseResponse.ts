export interface IBaseResponse<T> {
  message?: string;
  status?: boolean;
  statusCode?: number;
  validationErrors?: any[];
  data?: T;
}
