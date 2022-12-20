export interface IRepository<T, R> {
  findAll: () => Promise<R[]>
  findById: (id: string) => Promise<R>
  findByDate: () => Promise<R[]>
  findByCondition: (data?: Object) => Promise<R[]>
  addNew: (data: T) => Promise<R>
  edit: (id: string, data: T) => Promise<void>
  deleteByCondition: (id: string) => Promise<void>
}
