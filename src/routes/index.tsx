import { BrowserRouter } from "react-router"

import AuthRoutes from "./AuthRoutes"
import EmployeeRoutes from "./EmployeeRoutes"
import ManagerRoutes from "./ManagerRoutes"

import Loading from "../components/Loading"
import Error from "../pages/NotFound/404Error"

const isLoading = false
const session = {
  user: {
    role: "",
  },
}

function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />
      case "manager":
        return <ManagerRoutes />
      case "perdido":
        return <Error />
      default:
        return <AuthRoutes />
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}

export default Routes
