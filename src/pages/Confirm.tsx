import { useNavigate, useLocation, Navigate } from "react-router"

import Button from "../components/Button"
import okImg from "../assets/icons/ok.svg"

function Confirm() {
  const navigate = useNavigate()
  const location = useLocation()
  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }

  return (
    <div className="w-full flex flex-col bg-white p-10 rounded-2xl">
      <div className="text-center mb-10">
        <h1 className="text-green-100 text-center font-bold text-2xl">Solicitação enviada!</h1>

        <img src={okImg} alt="image de okay taokay" className="w-30 my-6 mx-auto" />

        <p className="text-sm text-center font-medium text-gray-200">
          Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor
          financeiro irá entrar em contato com você.
        </p>
      </div>
      <Button onClick={() => navigate("/")}>Nova Solicitação</Button>
    </div>
  )
}

export default Confirm
