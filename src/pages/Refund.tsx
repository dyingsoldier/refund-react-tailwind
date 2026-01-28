import { useState } from "react"
import { useNavigate } from "react-router"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/category"

import Input from "../components/Input"
import Upload from "../components/Upload"
import Select from "../components/Select"
import Button from "../components/Button"

function Refund() {
  const [Request, SetRequest] = useState("")
  const [Category, SetCategory] = useState("")
  const [Amount, SetAmount] = useState("")
  const [Filename, SetFilename] = useState<File | null>(null)
  const [isLoading, SetIsLoading] = useState(false)

  const navigate = useNavigate()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    navigate("/confirm", { state: { fromSubmit: true } })
    console.log(Request, Category, Amount, Filename?.name)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-6 rounded-2xl bg-gray-500 p-10 lg:min-w-lg"
    >
      <header className="flex flex-col gap-3">
        <h1 className="text-xl font-bold text-gray-100 md:text-3xl lg:text-4xl">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200 md:text-base lg:text-base">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input
        // required
        value={Request}
        legend="Nome da Solicitação"
        onChange={(e) => SetRequest(e.target.value)}
      />
      <div className="flex gap-3">
        <Select
          // required
          value={Category}
          legend="Categoria"
          onChange={(e) => SetCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((cat) => (
            <option value={cat} key={cat}>
              {CATEGORIES[cat].name}
            </option>
          ))}
        </Select>

        <Input
          // required
          legend="Valor"
          value={Amount}
          onChange={(e) => SetAmount(e.target.value)}
          placeholder="0.00"
        />
      </div>

      <Upload
        legend="Comprovante"
        filename={Filename && Filename.name}
        onChange={(e) => e.target.files && SetFilename(e.target.files[0])}
      />

      <Button type="submit" isLoading={isLoading}>
        Enviar
      </Button>
    </form>
  )
}

export default Refund
