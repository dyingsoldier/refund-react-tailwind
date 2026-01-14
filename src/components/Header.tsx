import Logo from "../assets/icons/logo.svg"
import Logout from "../assets/icons/logout.svg"

function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <img src={Logo} alt="logo icon" className="cursor-pointer my-8" />

      <div className="flex items-center gap-3">
        <p className="font-medium">Olá, Manoel</p>
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
