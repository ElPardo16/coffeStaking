import Link from "next/link";
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function Register({refeal}) {
    return (
        <form action="">
            <p className="refeal">Referido por: <span>{refeal}</span></p>
            <div className="input">
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" />
            </div>
            <div className="input">
                <label htmlFor="user">Usuario</label>
                <input id="user" name="user" type="text" />
            </div>
            <div className="input">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="email" />
            </div>
            <div className="input">
                <label htmlFor="cemail">Confirmar correo electrónico</label>
                <input id="cemail" name="cemail" type="text" />
            </div>
            <div className="input">
                <label htmlFor="password">Contraseña</label>
                <input id="ássword" name="password" type="text" />
            </div>
            <div className="input">
                <label htmlFor="cpassword">Confirmar contraseña</label>
                <input id="cpassword" name="cpassword" type="text" />
            </div>
            <div className="actions">
                <Link href="/">¿Ya se registró?</Link>
                <button className={nunito.className}>Registrarse</button>
            </div>
        </form>
    )
}
