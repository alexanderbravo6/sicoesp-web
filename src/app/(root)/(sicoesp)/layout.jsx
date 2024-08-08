'use client'
import Footer from '@/componentes/Layout/Footer'
import Navbar from '@/componentes/Layout/Navbar'
import Sidebar from '@/componentes/Layout/Sidebar'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ToastContainer } from 'react-toastify'

function PrincipalLayout({ children }) {
    const router = useRouter();
    return (
        <>
            <NextUIProvider navigate={router.push} >
                <div id="app" >
                    <aside id="logo-sidebar" className={` [grid-area:aside]   md:flex hidden   flex-col lg:w-[211px]  overflow-y-auto `}>
                        <Sidebar />
                    </aside>
                    <Navbar />
                    <div className=" [grid-area:main] overflow-x-auto overflow-y-auto sm:px-7 px-4   relative">
                        <div className="bg-white w-full  ">
                            {children}
                        </div>
                        <ToastContainer />
                    </div>
                    <Footer />
                </div>
            </NextUIProvider>
        </>
    )
}

export default PrincipalLayout