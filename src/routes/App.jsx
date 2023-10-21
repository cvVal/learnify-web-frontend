import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout.jsx';
import Home from '../components/Home.jsx'
import Courses from "../pages/Courses.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

function App() {

  return (
    <BrowserRouter >
                <Layout>
                    <Routes>
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/courses" element={<Courses />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
  )
}

export default App
