import { Routes, Route } from "react-router"

import AppLayout from "../components/layout/AppLayout"

import Dashboard from "../pages/Dashboard"
import Error from "../pages/NotFound/404Error"
import Refund from "../pages/Refund"

function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/refund/:id"} element={<Refund />} />
      </Route>

      {/* Page 404 */}
      <Route path={"*"} element={<Error />} />
    </Routes>
  )
}

export default ManagerRoutes
