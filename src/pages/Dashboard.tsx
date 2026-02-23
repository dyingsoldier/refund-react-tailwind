import { useState } from "react"

import Input from "../components/Input"
import Button from "../components/Button"
import Pagination from "../components/Pagination"

import RefundItem, { type RefundItemProps } from "../components/RefundItem"
import searchSVG from "../assets/icons/search.svg"

import { CATEGORIES } from "../utils/category"
import { formatCurrency } from "../utils/formatCurrency"

const refundExample = [
  {
    id: "1",
    username: "Manoel",
    category: "Alimentação",
    amount: formatCurrency(100),
    icon: CATEGORIES["food"].icon,
  },
  {
    id: "2",
    username: "Larissa",
    category: "Acomodação",
    amount: formatCurrency(50),
    icon: CATEGORIES["Accommodation"].icon,
  },
  {
    id: "3",
    username: "Gabriela",
    category: "Serviços",
    amount: formatCurrency(75.25),
    icon: CATEGORIES["Services"].icon,
  },
]

function Dashboard() {
  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [totalOfPages, setTotalPages] = useState(10)

  const [refunds, setRefunds] = useState<RefundItemProps[]>([refundExample[0]])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(name)
  }

  function handlePagination(action: "next" | "prev") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPages) {
        return prevPage + 1
      } else if (action === "prev" && prevPage > 1) {
        return prevPage - 1
      }

      return prevPage
    })
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 lg:w-lg">
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

      <div className="my-6 gap-1 flex flex-col max-h-[21.4rem] overflow-y-scroll overflow-x-hidden">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      <div>
        <Pagination
          onNext={() => handlePagination("next")}
          onPrev={() => handlePagination("prev")}
          current={page}
          total={totalOfPages}
        />
      </div>
    </div>
  )
}

export default Dashboard
