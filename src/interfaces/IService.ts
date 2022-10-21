export interface IService<T> {
  create(obj: unknown): Promise<T>
  read(): Promise<T[]>
  readOne(id: string): Promise<T>
  update(id: string, obj: unknown): Promise<T>
  // delete(id: string): Promise<T>
}