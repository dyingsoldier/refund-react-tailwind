import { createContext, type ReactNode } from "react"

// Tipagem de children
type ContextProps = {
  children: ReactNode
}

// Criação de Contexto
export const AuthContext = createContext({})

// Repassando o Filho de AuthProvider que será <Routes />
export function AuthProvider({ children }: ContextProps) {
  return (
    <AuthContext.Provider value={{ name: "manoel" }}>
      {children}
    </AuthContext.Provider>
  )
}
