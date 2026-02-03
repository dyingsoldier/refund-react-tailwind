import { Routes, Route } from "react-router"

import AppLayout from "../components/layout/AppLayout"

import Dashboard from "../pages/Dashboard"
import Error from "../pages/NotFound/404Error"

function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path={"/"} element={<Dashboard />} />
      </Route>

      {/* Page 404 */}
      <Route path={"*"} element={<Error />} />
    </Routes>
  )
}

export default ManagerRoutes
