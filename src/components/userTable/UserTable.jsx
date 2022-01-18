import React from 'react'
import Footer from '../footer/Footer'
import BtnNuevo from '../header/btn/BtnNuevo'
import HeaderIconHome from '../header/HeaderIconHome'
import Search from '../search/Search'

const UserTable = () => {
  return (
    <div >
      <HeaderIconHome />

      <div className='usuarioTable'>

        <div className='titleBtnNuevo'>
          <Search />
          <h2>Usuarios</h2>
          <BtnNuevo />
        </div>

        <table>
          <tbody>

            <tr>
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Correo/Usuario</th>
              <th>Telefono</th>
              <th>Entidad</th>
              <th>Editar</th>
              <th>Eliminar</th>

            </tr>
            <tr>
              <td>1</td>
              <td className='nameTable'>Carlos Peres Acosta</td>
              <td>carlos203@solsalud.com</td>
              <td>311756345</td>
              <td>Solsalud</td>
              <td className='iconTable1'><i class="fas fa-edit"></i></td>
              <td className='iconTable2'><i class="fas fa-trash-alt"></i></td>
            </tr>
            <tr>
              <td>2</td>
              <td className='nameTable'>Andrea Lopez</td>
              <td>Alopez@colsalud.com</td>
              <td>315786245</td>
              <td>Colsalud</td>
              <td className='iconTable1'><i class="fas fa-edit"></i></td>
              <td className='iconTable2'><i class="fas fa-trash-alt"></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td className='nameTable'>Jhon Jairo Medina</td>
              <td>JMedina@rxdiagnostic.com</td>
              <td>300956548</td>
              <td>RXDiagnósticos</td>
              <td className='iconTable1'><i class="fas fa-edit"></i></td>
              <td className='iconTable2'><i class="fas fa-trash-alt"></i></td>
            </tr>

          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  )
}

export default UserTable
