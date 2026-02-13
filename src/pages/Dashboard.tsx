import { useState } from "react"

import Input from "../components/Input"
import Button from "../components/Button"
import RefundItem from "../components/RefundItem"
import searchSVG from "../assets/icons/search.svg"

function Dashboard() {
  const [name, setName] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(name)
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-md">
      <h1 className="text-gray-100 font-bold text-xl">Solicitações</h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-1 justify-between items-center mt-6 pb-6 border-b border-b-gray-400 md:flex-row gap-1.5"
      >
        <Input
          placeholder="Pesquise pelo nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" variant="md">
          <img src={searchSVG} className="w-5" alt="" />
        </Button>
      </form>

      <div>
        <RefundItem />
      </div>
    </div>
  )
}

export default Dashboard
