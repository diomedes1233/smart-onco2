import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from '../pages/AdminPage'
import AgendaDayPage from '../pages/AgendaDayPage';
import ConfirmationDatingPage from '../pages/ConfirmationDatingPage';
import LandigPage from '../pages/LandinPage'
import LoginPage from '../pages/LoginPage'
import NewPacientpage from '../pages/NewPacientpage';
import NewRolepage from '../pages/NewRolepage';
import NewUserPage from '../pages/NewUserPage';
import PatientsPage from '../pages/PatientsPage';
import QuotesDaypage from '../pages/QuotesDaypage';
import Rolespage from '../pages/Rolespage'
import UserPage from '../pages/UserPage';


const Ruutes = () => {
    return (
        <div>

            <Router>

                <Routes>

                    <Route exact path="/"
                        element={<LandigPage />}>
                    </Route>

                    <Route exact path="/login"
                        element={<LoginPage />}>
                    </Route>

                    <Route exact path="/admin"
                        element={<AdminPage />}>
                    </Route>

                    <Route exact path="/roles"
                        element={<Rolespage />}>
                    </Route>

                    <Route exact path="/usuarios"
                        element={<UserPage />}>
                    </Route>

                    <Route exact path="/pacientes"
                        element={<PatientsPage />}>
                    </Route>

                    <Route exact path="/citasDelDia"
                        element={<QuotesDaypage />}>
                    </Route>

                    <Route exact path="/agendaDelDia"
                        element={<AgendaDayPage />}>
                    </Route>

                    <Route exact path="/confirmacionCitas"
                        element={<ConfirmationDatingPage />}>
                    </Route>

                    <Route exact path="/nuevoRol"
                        element={<NewRolepage />}>
                    </Route>

                    <Route exact path="/nuevoUsuario"
                        element={<NewUserPage />}>
                    </Route>

                    <Route exact path="/nuevoPaciente"
                        element={<NewPacientpage />}>
                    </Route>


                </Routes>

            </Router>

        </div>
    )
}

export default Ruutes
