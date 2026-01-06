function Error() {
  return (
    <div className="flex items-center justify-center flex-col text-gray-100">
      <h1 className="text-2xl font-semibold">Se Perdeu ai amigo!</h1>

      <div className="mt-5">
        <a
          href="/"
          className="text-gray-100 text-md font-semibold transition ease-linear hover:text-green-200"
        >
          Retornar para o Login
        </a>
      </div>
    </div>
  )
}

export default Error
