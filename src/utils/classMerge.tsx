import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default classMerge
