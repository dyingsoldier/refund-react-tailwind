import { Routes, Route } from "react-router"

import AuthLayout from "../components/layout/AuthLayout"
import SignIn from "../pages/SignIn"

function AuthRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path={"/"} element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AuthRoutes
