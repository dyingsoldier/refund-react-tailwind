import Logo from "../assets/icons/logo.svg"
import Logout from "../assets/icons/logout.svg"

import { useAuth } from "../hooks/useAuth"

function Header() {
  const headerAuth = useAuth()

  return (
    <header className="w-full flex justify-between items-center">
      <a href="/">
        <img src={Logo} alt="logo icon" className="cursor-pointer my-8" />
      </a>

      <div className="flex items-center gap-3">
        <p className="font-medium">Olá, {headerAuth.session?.user.name} </p>
        <img
          src={Logout}
          alt="logout icon"
          className="cursor-pointer my-8 hover:opacity-80 transition ease-linear"
        />
      </div>
    </header>
  )
}

export default Header
