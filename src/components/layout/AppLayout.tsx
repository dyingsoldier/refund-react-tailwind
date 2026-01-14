import Header from "../Header"
import { Outlet } from "react-router"

function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="w-full sm:w-auto p-3">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
