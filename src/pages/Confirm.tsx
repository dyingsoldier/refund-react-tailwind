import { useLocation, Navigate } from "react-router"

import okSvg from "../assets/icons/ok.svg"

function Confirm() {
  const location = useLocation()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }

  return (
    <div className="w-full flex flex-col gap-6 items-center bg-white p-10 rounded-2xl">
      <h1 className="text-green-100 text-center font-bold text-2xl">
        Solicitação enviada!
      </h1>

      <img src={okSvg} alt="image de okay taokay" className="w-28" />

      <p className="text-sm text-center font-medium text-gray-200">
        Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor
        financeiro irá entrar em contato com você.
      </p>

      <a
        href="/"
        className="w-full bg-green-100 hover:bg-green-200 text-white text-center rounded-2xl p-3 transition ease-linear hover:scale-103"
      >
        Nova Solicitação
      </a>
    </div>
  )
}

export default Confirm
