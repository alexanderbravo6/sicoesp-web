
function LoginLayout({ children }) {


    return (
        <>
            <div className="flex items-center w-full h-full min-h-[640px] ">
                <div className="lg:w-3/5 w-full gap-3  h-full flex flex-col justify-between   ">
                    <div className=" overflow-hidden">
                        <img src="/images/hero-logo-minedu.png" className=" m-5 w-52 " alt="Icono Ministerio de Educación" />
                    </div>
                    {children}
                </div>
                <div className="lg:w-2/5 lg:flex h-full hidden  overflow-hidden">
                    <img
                        className="object-cover w-full   h-full "
                        src="/images/hero-background.png"
                        alt="Local Minedu"
                    />
                </div>
            </div>

        </>
    )
}
export default LoginLayout