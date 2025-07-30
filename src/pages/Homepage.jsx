import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Product from '../components/Product'
import About from '../components/About.jsx'

function Homepage() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Product />
            <Footer />

        </>
    )
}

export default Homepage