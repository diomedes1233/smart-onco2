import React from 'react';
import BtnClose from '../btn/ BtnClose';
import BtnContinue from '../btn/ BtnContinue';

const NewUser = () => {
    return <div className='containerNewUser1'>
        <form action="#" className='containerNewUser2'>

            <div className='iconNewUser'>
                <i class="fas fa-edit"></i>
                <h1>Nuevo Usuario</h1>
            </div>

            <div className='containerInputsVarious'>

                <div className='containerInputsRows'>

                    <div className='containerInputs'>
                        <label for="fname">Nombres</label>
                        <input type="text"></input>
                    </div>

                    <div className='containerInputs'>
                        <label for="fname">Apellidos</label>
                        <input type="text"></input>
                    </div>
                </div>

                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname">Documento</label>
                        <input type="number"></input>
                    </div>

                    <div className='containerInputs'>
                        <label for="fname">Usuario</label>
                        <input type="text"></input>
                    </div>
                </div>

                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname">Empresa</label>
                        <input type="text"></input>
                    </div>

                    <div className='containerInputs'>
                        <label for="fname">Grupo de  permisos</label>
                        <input type="text" placeholder='Escoja una opción'></input>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </div>

                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname">Correo</label>
                        <input className='inputEmail' type="email"></input>
                    </div>
                </div>

                <div className='containerInputsRows'>
                    <div className='containerInputs'>
                        <label for="fname">Contraceña</label>
                        <input type="password"></input>
                    </div>

                    <div className='containerInputs'>
                        <label for="fname">Repetir Contraceña</label>
                        <input type="password"></input>
                    </div>
                </div>

            </div>

            <div className='BtnCloseBtnContinue'>
                <BtnClose />
                <BtnContinue />
            </div>
        </form>

    </div>
}

export default NewUser;
