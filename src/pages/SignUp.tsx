import { useState } from "react"
import { z, ZodError } from "zod"

import Input from "../components/Input"
import Button from "../components/Button"

const SignUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Se tem nome né ?" }),
    email: z.string().trim().min(1, { message: "Precisa do email fi" }),
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

  function OnSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      SetIsLoading(true)

      const data = SignUpSchema.parse({
        name,
        email,
        password,
        PasswordConfirm,
      })

      console.log(name, email, password, PasswordConfirm)
    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
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
