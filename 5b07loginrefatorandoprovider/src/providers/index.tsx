import { ReactNode } from "react"
import { AuthProvider } from "./AuthContent"

interface ProvidersProps{
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    return(
        <AuthProvider> {children} </AuthProvider>
    )
}

export default Providers