import React from 'react'
import CardAdmin from '../components/admin/CardAdmin'


import MenuAdmin from '../components/admin/MenuAdmin'
import Footer from '../components/footer/Footer'
import HeaderAdmin from '../components/header/HeaderAdmin'


const AdminPage = () => {
    return (
        <div className='adminPageContainer'>
            <HeaderAdmin />
            <div className='adminMenuCardContainer'>

                <MenuAdmin />
                <CardAdmin />

            </div>
            <Footer />
        </div>
    )
}

export default AdminPage
