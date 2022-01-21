import React from 'react';
import BtnClose from '../btn/ BtnClose';
import BtnContinue from '../btn/ BtnContinue';
import Btngoback from '../btn/Btngoback';

const NewPacient = () => {
    return <div>

        <div className='containerNewPacient1'>

            <form action="#" className='containerNewUser2'>



                <h1>Nuevo Paciente</h1>


                <div className='containerInputsVarious'>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Tipo de Documento</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Número de Documento</label>
                            <input type="number"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Primer nombre</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Segundo nombre</label>
                            <input type="text"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Primer Apellido</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Segundo Apellido</label>
                            <input type="text"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Sexo</label>
                            <input type="text" placeholder='Escoja  Sexo'></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Edad</label>
                            <input type="number"></input>
                        </div>

                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Fecha de Nacimiento</label>
                            <input type="date"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Actividad Lanoral</label>
                            <input type="text"></input>
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
                            <label for="fname">Régimen</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">EPS</label>
                            <input type="text" placeholder='Escoja  Eps'></input>
                            <i class="fas fa-caret-down"></i>
                        </div>


                    </div>

                    <div className='containerInputsRows'>
                        <div className='containerInputs'>
                            <label for="fname">Direccion</label>
                            <input type="text"></input>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Barrio</label>
                            <input type="text"></input>
                        </div>
                    </div>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Ciudad</label>
                            <input type="text"></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Departamento</label>
                            <input type="text"></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                    </div>

                    <div className='containerInputsRows'>

                        <div className='containerInputs'>
                            <label for="fname">Zona</label>
                            <input type="text"></input>
                            <i class="fas fa-caret-down"></i>
                        </div>

                        <div className='containerInputs'>
                            <label for="fname">Nacionalidad</label>
                            <input type="text"></input>
                        </div>

                    </div>



                </div>

                <div className='BtngobackBtnContinue'>
                    <Btngoback />
                    <BtnContinue />
                </div>
            </form>

        </div>

    </div>
}

export default NewPacient
