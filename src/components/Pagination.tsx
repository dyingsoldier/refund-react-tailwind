type PaginationProps = {
  current: number
  total: number
}

import Button from "./Button"

import leftSvg from "../assets/icons/left.svg"
import rightSvg from "../assets/icons/right.svg"

function Pagination({ current, total }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-6">
      <Button variant="icon">
        <img src={leftSvg} alt="icon de voltar" />
      </Button>

      <span>
        {current} de {total}
      </span>

      <Button variant="icon">
        <img src={rightSvg} alt="icon de avançar" />
      </Button>
    </div>
  )
}

export default Pagination
