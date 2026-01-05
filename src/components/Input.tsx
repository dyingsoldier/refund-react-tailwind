type InputProps = React.ComponentProps<"input"> & {
  legend?: string
}

function Input({ legend, ...props }: InputProps) {
  return (
    <fieldset className="flex flex-col max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit font-medium">
          {legend}
        </legend>
      )}
      <input type="text" {...props}
      className="w-full h-12 bg-transparent rounded-2xl border border-gray-300 px-4 outline-none
      focus-within:border-green-100"/>
    </fieldset>
  )
}

export default Input
