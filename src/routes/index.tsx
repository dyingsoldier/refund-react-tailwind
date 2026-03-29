import { BrowserRouter } from "react-router"

// * Contexto
// import { use } from "react"
// import { AuthContext } from "../context/AuthContext"

//! Contexto com Hook
import { useAuth } from "../hooks/useAuth"

import AuthRoutes from "./AuthRoutes"
import EmployeeRoutes from "./EmployeeRoutes"
import ManagerRoutes from "./ManagerRoutes"

import Loading from "../components/Loading"
import Error from "../pages/NotFound/404Error"

const isLoading = false

function Routes() {
  const { session } = useAuth()

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
