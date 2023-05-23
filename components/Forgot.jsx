import Link from "next/link";
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function Forgot() {
    return (
        <form className="forgot" action="">
            <p>¿Olvidó su contraseña? No hay problema. Simplemente déjenos saber su dirección de correo electrónico y le enviaremos un enlace para restablecer la contraseña que le permitirá elegir una nueva.</p>
            <div className="input">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="text" />
            </div>
            <div className="actions">
                <button className={nunito.className}>Enviar enlace para restablecer contraseña</button>
            </div>
        </form>
    )
}
