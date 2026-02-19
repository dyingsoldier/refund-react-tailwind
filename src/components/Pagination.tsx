type PaginationProps = {
  current: number
  total: number

  onNext: () => void
  onPrev: () => void
}

import Button from "./Button"

import leftSvg from "../assets/icons/left.svg"
import rightSvg from "../assets/icons/right.svg"

function Pagination({ current, total, onNext, onPrev }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-6">
      <Button variant="icon" onClick={onPrev} disabled={current === 1}>
        <img src={leftSvg} alt="icon de voltar" />
      </Button>

      <span>
        {current} de {total}
      </span>

      <Button variant="icon" onClick={onNext} disabled={current === total}>
        <img src={rightSvg} alt="icon de avançar" />
      </Button>
    </div>
  )
}

export default Pagination
export { type PaginationProps }
