type ButtonProps = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

function Button({
  type = "button",
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-green-100 text-white p-1 h-12 rounded-2xl cursor-pointer w-full flex items-center justify-center outline-none
        transition ease-linear hover:bg-green-200 hover:scale-103 disabled:opacity-50 disabled:cursor-progress"
        disabled={isLoading}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
