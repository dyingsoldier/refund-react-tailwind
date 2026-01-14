import { BrowserRouter } from "react-router"

import AuthRoutes from "./AuthRoutes"
import EmployeeRoutes from "./EmployeeRoutes"

function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  )
}

export default Routes
