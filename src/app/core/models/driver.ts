export interface Driver {
  name: string,
  image?: string,
  delivered: number,
  pending: number,
  unsuccessful: number,
  total: number
}
