import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, Switch } from "react-router-dom";
import Categories from "./page/CategoryCarRental/CatagoriesCarRen";
import Contact from "./page/Contact";
import Home from "./page/Home/Home";
import DetailCar from "./page/DetailCar/DetailCar";
function App() {
    return(
        <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Categories" element={<Categories/>}/>
                <Route path="/DetailCar" element={<DetailCar/>}/>
            </Routes>          
        </div>
    )
}
export default App;