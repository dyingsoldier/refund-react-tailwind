import { BrowserRouter } from "react-router"

import AuthRoutes from "./AuthRoutes"
import EmployeeRoutes from "./EmployeeRoutes"
import ManagerRoutes from "./ManagerRoutes"

function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  )
}

export default Routes
