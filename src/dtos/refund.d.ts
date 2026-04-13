type RefundAPIResponse = {
  id: string
  userId: string
  category: CategoriesAPIEnum
  amount: number
  filename: string
  user: {
    name: string
  }
}

type RefundsPaginationAPIResponse = {
  refunds: RefundAPIResponse[]
  pagination: {
    page: number
    perPage: number
    totalPages: number
    totalRecords: number
  }
}
