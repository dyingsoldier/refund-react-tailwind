type RefundItemProps = {
  id: string
  username: string
  category: string
  amount: number
  icon: string
}

type LinkProps = React.ComponentProps<"a"> & {
  data: RefundItemProps
}

function RefundItem({ data, ...props }: LinkProps) {
  return (
    <a
      href=""
      className="flex items-center mt-6 gap-2 rounded-2xl p-3 hover:bg-green-200/25"
      {...props}
    >
      <img src={data.icon} alt="icon de category" className="w-8 h-8" />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.username}</strong>
        <p className="text-xs text-gray-200">{data.category}</p>
      </div>

      <span className="text-xs text-gray-100 font-semibold">
        <small className="font-normal gray-200">R$ </small>
        {data.amount}
      </span>
    </a>
  )
}

export default RefundItem
