export interface APIResponse<T> {
  code: number
  data: T
  headers: any
  statusText: string
}
