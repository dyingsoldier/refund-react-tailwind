type InputProps = React.ComponentProps<"input"> & {
  legend?: string
}

function Input({ legend, ...props }: InputProps) {
  return (
    <fieldset className="flex max-h-20 flex-1 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="text-xxs mb-2 font-medium text-inherit uppercase">{legend}</legend>
      )}
      <input
        type="text"
        {...props}
        className="h-12 w-full text-xs md:text-sm lg:text-md rounded-2xl border border-gray-300 bg-transparent p-4 text-gray-200 outline-none focus-within:border-green-100"
      />
    </fieldset>
  )
}

export default Input
