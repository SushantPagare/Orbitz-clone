import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { Header } from "../Componests/Header";
import { Search } from "../Componests/Search";
import { Signin } from "../Componests/Signin";
import { Signup } from "../Componests/Signup";



export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <SearchBar/>
                </Route>
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
               
            </Switch>
        </div>
    )
}