import React from 'react'

const LoginBody = () => {
    return (
        <>

            <form className='containerLoginInput'>


                <h4>INICIAR SESIÓN</h4>

                <div className='textlogin'><label htmlFor="">Correo</label></div>
                <input
                    type="text"
                    placeholder='Usuario'

                />
                <div className='textlogin'><label htmlFor="">Contraseña</label></div>
                <input
                    type="pasword"
                    placeholder='Contraseña'
                />
                <p>¿Olvidaste tu contraseña?</p>

                <button className='button' type="submit" name="button">LOGIN</button>
            </form>
        </>
    )
}

export default LoginBody
