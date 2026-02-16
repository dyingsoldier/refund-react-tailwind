import classMerge from "../utils/classMerge"

type ButtonProps = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: "icon" | "sm" | "md" | "base"
}

const ButtonVariant = {
  variants: {
    icon: "h-8 w-8",
    sm: "h-10 w-10",
    md: "h-12 w-12",
    base: "h-12 w-full",
  },
}

function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "base",
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading}
      className={classMerge([
        "flex items-center justify-center bg-green-100 text-white p-1 rounded-xl cursor-pointer outline-none transition ease-linear hover:bg-green-200 hover:scale-103 disabled:opacity-50 disabled:cursor-progress",
        ButtonVariant.variants[variant],
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
