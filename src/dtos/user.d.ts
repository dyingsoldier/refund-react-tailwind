type UserAPIRole = "employee" | "manager" | "perdido"

type UserAPIResponse = {
  token?: string
  user: {
    email?: string
    name?: string
    id?: string
    role: UserAPIRole
  }
}
