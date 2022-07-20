import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../Componests/Footer";
import { Header } from "../Componests/Header";
import { Search } from "../Componests/Search";
import { Signin } from "../Componests/Signin";
import { Signup } from "../Componests/Signup";



export const AllRoutes = () => {
    return (
        <Routes>
        
                <Route exact path="/Header">
                    <Header  />
                </Route>
                <Route exact path="/Search">
                <Search/>
                </Route>
                <Route exact path="/Signin">
                  <Signin/>
                </Route>
                <Route exact path="/signup">
                  <Signup/>
                </Route>
                <Route exact path="/footer">
                  <Footer />
                </Route>
               
           
        </Routes>
    )
}