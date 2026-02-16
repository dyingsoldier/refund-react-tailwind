type SelectProps = React.ComponentProps<"select"> & {
  legend?: string
}

function Select({ legend, children, ...props }: SelectProps) {
  return (
    <fieldset className="flex max-h-20 flex-2 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="text-xxs mb-2 font-medium text-inherit uppercase">
          {legend}
        </legend>
      )}
      <select
        {...props}
        className="h-12 w-full text-xs md:text-sm lg:text-md rounded-2xl border border-gray-300 bg-transparent px-4 pr-12 text-gray-200 outline-none focus:border-green-100 focus-visible:border-green-100"
      >
        <option value="" hidden>
          Selecione
        </option>
        {children}
      </select>
    </fieldset>
  )
}

export default Select
