import Input from "../components/Input"

function SignIn() {
  return (
    <form className="w-full flex flex-col gap-5">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="email@email.com"
      />
      <Input
        required
        legend="Senha"
        type="password"
        placeholder="Senha2025"
      />
    </form>
  )
}

export default SignIn
