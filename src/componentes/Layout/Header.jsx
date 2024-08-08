import { Divider } from '@nextui-org/react'
import React from 'react'
import Breadcrumb from '../UI/Breadcrumb'

function Header({ itemBreadcrumbs, titulo }) {
    return (
        <>
            <section className='w-full h-10 px-3 flex justify-between items-center bg-main  rounded-md '>
                <section className='flex items-center justify-center'>
                    <h1 className='text-white font-bold lg:text-lg text-sm '>{titulo}
                    </h1>
                </section>
                <h2 className='text-white font-light md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>
            </section>
            <Divider className='mb-3' />
        </>
    )
}

export default Header