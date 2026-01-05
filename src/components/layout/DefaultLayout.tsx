import { Outlet } from "react-router"

function Layout() {
  return (
    <div>
      <header>
        <h1>aqui é o header</h1>
      </header>

      <Outlet />

      <footer>
        <h1>Aqui é o footer</h1>
      </footer>
    </div>
  )
}

export default Layout
