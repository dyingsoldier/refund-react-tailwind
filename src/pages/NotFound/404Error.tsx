function Error() {
  return (
    <div className="w-full flex items-center justify-center flex-col text-gray-100">
      <h1>Se Perdeu ai amigo!</h1>

      <div className="mt-10">
        <a
          href="/"
          className="text-gray-100 text-sm font-semibold transition ease-linear hover:text-green-200"
        >
          Retornar para o Menu
        </a>
      </div>
    </div>
  )
}

export default Error
