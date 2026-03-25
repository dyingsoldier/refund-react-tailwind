import { createContext, type ReactNode } from "react"
import { useState } from "react"

// usando a Tipagem UserAPIResponse (Usado Globalmente sem precisar de import)
// src/dtos/user.d.ts
type AuthContext = {
  session: null | UserAPIResponse
}

// Props de children
type ContextProps = { children: ReactNode }

// Criação de Contexto
export const AuthContext = createContext({} as AuthContext)

// Exportando func AuthProvider para a Route
// children vai equivaler a <Routes /> quando for utilizada
export function AuthProvider({ children }: ContextProps) {
  const [session, setSession] = useState<null | UserAPIResponse>(null)

  return (
    <AuthContext.Provider value={ { session } }>
      {children}
    </AuthContext.Provider>
  )
}
