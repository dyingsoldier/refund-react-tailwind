import Dog from "../../assets/img/dog.png"

function Error() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col text-gray-100">
      <h1 className="text-2xl font-semibold">Essa Página Não Existe!</h1>
      <p className="font-medium mb-2">Retorne para a Safe</p>

      <img src={Dog} alt="imagem de cachorro" className="w-2xs" />

      <div className="mt-5">
        <a
          href="/"
          className="text-green-100 text-md font-semibold transition ease-linear hover:text-green-200"
        >
          Retornar para o Login
        </a>
      </div>
    </div>
  )
}

export default Error
