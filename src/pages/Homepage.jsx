import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Product from '../components/Product'
import About from '../components/About.jsx'
import Contact from '../components/contact.jsx'

function Homepage() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Product />
            <Contact/>
            
            <Footer />

        </>
    )
}

export default Homepage