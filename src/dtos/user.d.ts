type UserAPIRole = "employee" | "manager"

type UserAPIResponse = {
  token: string
  user : {
    email: string
    name: string
    id: string
    role: UserAPIRole
  }
}
