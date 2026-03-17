import { useActionState } from "react"

import Input from "../components/Input"
import Button from "../components/Button"

function SignIn() {
  const [state, formAction, isLoading] = useActionState(signInAction, null)

  async function signInAction(prevState: any, formData: FormData) {
    const email = formData.get("email")
    const password = formData.get("password")

    console.log(email, password)

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("")
      }, 2000)
    })
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
