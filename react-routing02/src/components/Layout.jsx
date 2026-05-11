import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


// React -- very small 
// Routing is not a part of react 
// still we can use react for routing by using react-router-dom package.

function Layout() {
    return (
        <>
        <Header />
        <main className="container mx-auto py-4">
            <Outlet />
        </main>
        <Footer />
        </>
    )
}

export default Layout;