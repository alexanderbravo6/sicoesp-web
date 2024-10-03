
import { PostulacionProvider } from '@/modules/Postulacion/Providers/PostulacionProvider'
import React from 'react'

function PostulacionLayout({ children }) {
    return (
        <>
            <PostulacionProvider >
                {children}
            </PostulacionProvider>
        </>
    )
}

export default PostulacionLayout