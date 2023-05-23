import Link from "next/link";
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function Login() {
    return (
        <form action="">
            <div className="input">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="text" />
            </div>
            <div className="input">
                <label htmlFor="password">Contraseña</label>
                <input id="password" name="password" type="text" />
            </div>
            <div className="session">
                <input type="checkbox" name="save-session" id="save-session" />
                <label htmlFor="save-session">Mantener sesión activa</label>
            </div>
            <div className="actions">
                <Link href="/forgot-password">¿Olvidó su contraseña?</Link>
                <Link href="/register/stakingpro">Registrarse</Link>
                <button className={nunito.className}>Iniciar Sesión</button>
            </div>
        </form>
    )
}
