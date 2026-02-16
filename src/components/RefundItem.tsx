type RefundItemProps = {
  id: string
  username: string
  category: string
  amount: string
  icon: string
}

type LinkProps = React.ComponentProps<"a"> & {
  data: RefundItemProps
}

function RefundItem({ data, ...props }: LinkProps) {
  return (
    <a
      href=""
      className="flex items-center gap-2 rounded-2xl p-3 mr-1 transition ease-in-out  hover:bg-green-200/20"
      {...props}
    >
      <img src={data.icon} alt="icon de category" className="w-8 h-8" />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.username}</strong>
        <p className="text-xs text-gray-200">{data.category}</p>
      </div>

      <span className="text-sm p-2 text-gray-100 font-semibold">
        <small className="font-normal text-gray-200 gray-200">R$</small>
        {data.amount}
      </span>
    </a>
  )
}

export default RefundItem
