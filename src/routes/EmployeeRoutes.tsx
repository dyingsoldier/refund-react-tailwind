import { Routes, Route } from "react-router"

import AppLayout from "../components/layout/AppLayout"

import Refund from "../pages/Refund"
import Confirm from "../pages/Confirm"
import Error from "../pages/NotFound/404Error"

function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>

      {/* Page 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default EmployeeRoutes
