import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/category"
import { z, ZodError } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import Input from "../components/Input"
import Upload from "../components/Upload"
import Select from "../components/Select"
import Button from "../components/Button"

import fileSvg from "../assets/icons/file.svg"

const refundSchema = z.object({
  Request: z.string().trim().min(3, { message: "Qual Seria a Solicitação" }),
  Category: z.string().min(1, { message: "Selecione uma Categoria" }),
  Amount: z.coerce
    .number()
    .positive({ message: "Numeros Negativos Serão Desconsiderados" }),
})

function Refund() {
  const [Request, SetRequest] = useState("")
  const [Category, SetCategory] = useState("")
  const [Amount, SetAmount] = useState("")
  const [Filename, SetFilename] = useState<File | null>(null)
  const [isLoading, SetIsLoading] = useState(false)

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (params.id) {
      return navigate(-1)
    }

    try {
      SetIsLoading(true)

      const data = refundSchema.parse({
        Request,
        Category,
        Amount: Amount.replace(",", "."),
      })

      console.log(data)
      // navigate("/confirm", { state: { fromSubmit: true } })
    } catch (error) {
      if (error instanceof ZodError) {
        return console.log(error.issues[0].message)
      }

      alert(`Não foi Possivel Enviar ${error}`)
    } finally {
      SetIsLoading(false)
    }
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
        required
        value={Request}
        legend="Nome da Solicitação"
        onChange={(e) => SetRequest(e.target.value)}
        disabled={!!params.id}
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
          legend="Valor"
          value={Amount}
          onChange={(e) => SetAmount(e.target.value)}
          placeholder="0.00"
        />
      </div>

      {params.id ? (
        <a
          href="https://fonts.google.com/"
          target="_blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-5 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="icon de comprovante" />
          Acesse o Comprovante
        </a>
      ) : (
        <Upload
          legend="Comprovante"
          filename={Filename && Filename.name}
          onChange={(e) => e.target.files && SetFilename(e.target.files[0])}
        />
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  )
}

export default Refund
