import { Routes, Route } from "react-router"

import AuthLayout from "../components/layout/AuthLayout"
import SignIn from "../pages/SignIn"
import Signup from "../pages/SignUp"
import Error from "../pages/NotFound/404Error"

function AuthRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path={"/"} element={<SignIn />} />
          <Route path={"/signup"} element={<Signup />} />
        </Route>

        {/* Page 404 */}
        <Route path={"*"} element={<Error />} />
      </Routes>
    </div>
  )
}

export default AuthRoutes
