import { BrowserRouter } from "react-router"
import AuthRoutes from "./AuthRoutes"

function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}

export default Routes
