import { createContext, ReactNode, useState } from 'react'
import { login } from '../services/service'
import UsuarioLogin from '../models/UsuarioLogin'
import { ToastAlerta } from '../utils/ToastAlerta'

// oque quer disponibilizar no contexto
interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): Promise<void>
    handleLogout(): void
    isLoading: boolean
}

// o que recebe o contexto, no caso todo e qualquer componente React rederizavel
interface AuthProviderProps {
    children: ReactNode
}

// cria uma nova instancia da API context
export const AuthContext = createContext({} as AuthContextProps)

// cria o provedor
export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        idade: "",    
        cpf: "",
        usuario: "",
        senha: "",
        foto: "",
        tipo: "",
        token: ""
    })


    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(usuarioLogin: UsuarioLogin) {

        setIsLoading(true);

        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            ToastAlerta("Usuario Autenticado com sucesso!", "Sucesso")

        } catch (error) {
            ToastAlerta("Os dados do usuario estao incorretos", "Erro")
        }

        setIsLoading(false);
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            idade: "",
            cpf: "",
            usuario: "",
            senha: "",
            foto: "",
            tipo: "",
            token: ""
        })
    }


    return (
        // renderizando a context na aplicacao react
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
