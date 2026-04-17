import { useState, useEffect } from "react"

import Input from "../components/Input"
import Button from "../components/Button"
import Pagination from "../components/Pagination"
import RefundItem, { type RefundItemProps } from "../components/RefundItem"
import searchSVG from "../assets/icons/search.svg"

import { AxiosError } from "axios"

import { api } from "../services/api"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/category"
import { formatCurrency } from "../utils/formatCurrency"
import { useAuth } from "../hooks/useAuth"

const PER_PAGE = 3

function Dashboard() {
  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [totalOfPages, setTotalPages] = useState(0)
  const [refunds, setRefunds] = useState<RefundItemProps[]>([])

  // Puxando Dados do usuario pelo contexto global.
  const context = useAuth()

  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`,
      )

      // Buscando os Refunds na API
      setRefunds(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          name: refund.user.name,
          description: refund.name,
          amount: formatCurrency(refund.amount),

          icon: CATEGORIES[refund.category].icon,
        })),
      )

      setTotalPages(response.data.pagination.totalPages)
      // console.log(response.data.refunds[0])
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      return alert("Não foi Possivel identificar o erro.")
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    fetchRefunds()
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

  useEffect(() => {
    fetchRefunds()
  }, [page])

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
