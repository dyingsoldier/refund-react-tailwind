import { Outlet } from "react-router"
import Logo from "../../assets/icons/logo.svg"

function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-300 text-white flex flex-col items-center justify-center p-8">
      <main className="bg-gray-500 p-8 rounded-2xl flex flex-col items-center w-full md:max-w-115.5 shadow-2xl">
        <img src={Logo} alt="Logo" className="my-5 w-35" />

        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
