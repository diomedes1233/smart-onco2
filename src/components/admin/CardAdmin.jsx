import React from 'react'
import { Link } from 'react-router-dom'


const CardAdmin = () => {
    return (
        <div className='containerCardAdmin'>

            <div className='cardPaccientes'>
                <i class="fas fa-user"></i>
                <div className='numText'><Link to='#'>36</Link>
                    <h4>Paciente</h4>
                </div>
            </div>

            <div className='cardCitas'>
                <i class="fas fa-file-alt"></i>
                <div className='numText'><Link to='#'>15</Link>
                    <h4>Citas del dia</h4>
                </div>
            </div>

            <div className='cardTotalCitas'>
                <i class="fas fa-copy"></i>
                <div className='numText'><Link to='#'>48</Link>
                    <h4>Total citas</h4>
                </div>

            </div>


        </div>
    )
}

export default CardAdmin
