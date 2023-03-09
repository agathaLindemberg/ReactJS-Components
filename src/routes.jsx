import React from "react";
import {Routes, Route} from 'react-router-dom'

import PagInicial from "./components/PagInicial";
import Service from "./components/Service";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Contact from "./components/Contact";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<PagInicial/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/howItWorks" element={<HowItWorks/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    )
}