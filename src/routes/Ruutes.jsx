import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from '../pages/AdminPage'
import AgendaDayPage from '../pages/AgendaDayPage';
import LandigPage from '../pages/LandinPage'
import LoginPage from '../pages/LoginPage'
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

                    <Route exact path="/citasdeldia"
                        element={<QuotesDaypage />}>
                    </Route>

                    <Route exact path="/agendadeldia"
                        element={<AgendaDayPage />}>
                    </Route>


                </Routes>

            </Router>

        </div>
    )
}

export default Ruutes
