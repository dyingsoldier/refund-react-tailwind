import { useState } from "react"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/category"

import Input from "../components/Input"
import Upload from "../components/Upload"
import Select from "../components/Select"
import Button from "../components/Button"

function Refund() {
  function onSubmit() {
    console.log(Category, Request, Value, Confirm)
  }

  const [Request, SetRequest] = useState("")
  const [Category, SetCategory] = useState("")
  const [Value, SetValue] = useState("")
  const [Confirm, SetConfirm] = useState("")
  const [isLoading, SetIsLoading] = useState(false)

  // console.log(CATEGORIES, CATEGORIES_KEYS)

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
        required
        value={Request}
        legend="Nome da Solicitação"
        onChange={(e) => SetRequest(e.target.value)}
      />
      <div className="flex gap-3">
        <Select
          required
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
          required
          value={Value}
          placeholder="0.00"
          legend="Valor"
          type="number"
          onChange={(e) => SetValue(e.target.value)}
        />
      </div>

      <Upload
        legend="Comprovante"
        value={Confirm}
        onChange={(e) => SetConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Enviar
      </Button>
    </form>
  )
}

export default Refund
