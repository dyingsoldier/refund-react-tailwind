import { useActionState } from "react"
import { z, ZodError } from "zod"
import { AxiosError } from "axios"
import { api } from "../services/api"

import Input from "../components/Input"
import Button from "../components/Button"

const signInSchema = z.object({
  email: z.email({ message: "E-mail Inválido" }).trim(),
  password: z.string().trim().min(1, { message: "Senha Inválida" }),
})

function SignIn() {
  const [state, formAction, isLoading] = useActionState(signInAction, null)

  async function signInAction(prevState: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      })

      const response = await api.post("/sessions", data)
      console.log(response.data)
      
    } catch (error) {
      if (error instanceof ZodError) {
        return { message: error.issues[0].message }
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message }
      }

      return { message: "Não foi possivel fazer o login." }
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-5">
      <Input
        required
        name="email"
        legend="E-mail"
        type="email"
        placeholder="email@email.com"
      />
      <Input
        required
        name="password"
        legend="Senha"
        type="password"
        placeholder="Senha2025"
      />

      <span className="my-1 capitalize text-red-500 font-medium text-sm text-center">
        {state?.message}
      </span>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <div className=" my-1 text-center">
        <a
          href="/signup"
          className="text-gray-100 text-sm font-semibold transition ease-linear hover:text-green-200"
        >
          Criar Conta
        </a>
      </div>
    </form>
  )
}

export default SignIn
