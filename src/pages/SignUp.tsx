import { useState } from "react"
import { useNavigate } from "react-router"
import { z, ZodError } from "zod"
import { AxiosError } from "axios"

import { api } from "../services/api"

import Input from "../components/Input"
import Button from "../components/Button"

const SignUpSchema = z
  .object({
    name: z.string().trim().min(3, { message: "Se tem nome né ?" }),
    email: z.string().email({ message: "Precisa do email fi" }),
    password: z.string().min(8, { message: "Preciso de 8 caracteres" }),
    PasswordConfirm: z.string({ message: "redigita a senha ai" }),
  })
  .refine((data) => data.password === data.PasswordConfirm, {
    message: "as senhas n sao iguais",
    path: ["PasswordConfirm"],
  })

function SignUp() {
  const [name, SetName] = useState("")
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  const [PasswordConfirm, SetPasswordConfirm] = useState("")
  const [isLoading, SetIsLoading] = useState(false)

  const navigate = useNavigate()

  async function OnSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      SetIsLoading(true)

      const data = SignUpSchema.parse({
        name,
        email,
        password,
        PasswordConfirm,
      })

      await api.post("/users", data)
      navigate("/")
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("não sei qq deu")
    } finally {
      SetIsLoading(false)
    }
  }
  return (
    <form onSubmit={OnSubmit} className="w-full flex flex-col gap-5">
      <Input
        legend="Nome"
        placeholder="Manoel"
        onChange={(e) => SetName(e.target.value)}
      />
      <Input
        legend="E-mail"
        type="email"
        placeholder="email@email.com"
        onChange={(e) => SetEmail(e.target.value)}
      />
      <Input
        legend="Senha"
        type="password"
        placeholder="Senha2025"
        onChange={(e) => SetPassword(e.target.value)}
      />
      <Input
        legend="Confirmação da senha"
        type="password"
        placeholder="Senha2025"
        onChange={(e) => SetPasswordConfirm(e.target.value)}
      />
      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>
      <div className=" my-1 text-center">
        <a
          href="/"
          className="text-gray-100 text-sm font-semibold transition ease-linear hover:text-green-200"
        >
          Já Tenho Uma Conta
        </a>
      </div>
    </form>
  )
}

export default SignUp
