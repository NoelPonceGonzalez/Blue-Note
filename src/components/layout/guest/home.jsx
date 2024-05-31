"use client"

import Login from '@/components/layout/guest/auth/login';
import Footer from '@/components/ui/footer'; // Actualiza la ruta de importación
import Icons from '@/components/ui/icons';
import { getUserSession } from "@/lib/data";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [navBarPhone, setNavBarPhone] = useState(false);
    const [showFooter, setShowFooter] = useState(false);
    const loginRef = useRef(null);
    const navBarRef = useRef(null);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const handleClickOutside = (event) => {
        if (loginRef.current && !loginRef.current.contains(event.target)) {
            setShowLogin(false);
        }
        if (event.srcElement.className != "bar_burger" && !navBarPhone && event.target.localName != "h1") {
            setNavBarPhone(false);
        }
        if (event.srcElement.id == "closelogin" && !showLogin) {
            setShowLogin(false);
        }
        console.log(event.srcElement.id, showLogin);
    };

    const handleNavBarPhone = () => {
        setNavBarPhone(!navBarPhone);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        async function fetchUserSession() {
            const userSession = await getUserSession();
            setUser(userSession);
        }

        fetchUserSession();
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="relative overflow-auto min-h-screen">
            {showLogin && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bckg_filters_logins h-32s">
                    <div ref={loginRef}>
                        <Login />
                    </div>
                </div>
            )}
            <img src="/images/homepageRetocada.png" draggable="false" className="bckg_img hidden_in_mobile" />

            <div id="bckg_phone" className={`bckg_img2 ${navBarPhone ? 'shown' : 'hiddenbar'}`} >
                {/* BARRA PARA EL MOVIL */}
                <div className={` w-[50px] mt-4 ml-5 navbar_phone hidden_in_pc`} onClick={handleNavBarPhone}>
                    <div className='bar_burger' ref={navBarRef}>
                        <Link href="/aboutus" className='z-10'>
                            <h1 className="navBar_text_orange">Sobre nosotros</h1>
                        </Link>
                    </div>
                    <div className='bar_burger' ref={navBarRef}>
                        <Link href="/events" className='z-10'>
                            <h1 className="navBar_text_yellow">Eventos</h1>
                        </Link>
                    </div>
                    <div className='bar_burger' ref={navBarRef}>
                        <Link href="/gallery" className='z-10'>
                            <h1 className="navBar_text_red">Galería</h1>
                        </Link>
                    </div>
                    <div className='bar_burger' ref={navBarRef}>
                        <Link href="/contact" className='z-10'>
                            <h1 className="navBar_text_orange">Contacto</h1>
                        </Link>
                    </div>
                    <div className='bar_burger' ref={navBarRef}>
                        {!user ? (
                            <h1 onClick={toggleLogin} className="login_phone z-10">Login</h1>
                        ) : (
                            <Link href={`/${user.type.toLowerCase()}`} className='z-10'>
                                <h1 className="login_phone">Portal</h1>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {/* BARRA PARA EL PC */}
            <div className="flex justify-between ml-7 hidden_in_mobile">
                <div className="flex justify-center gap-14 items-center">
                    <Link href="/aboutus" className='z-10'>
                        <h1 className="home-text-about ml-10 font-bold text-xl px-6 py-1 rounded-lg bg-transparent border-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out">Sobre nosotros</h1>
                    </Link>
                    <Link href="/events" className='z-10'>
                        <h1 className="home-text-event  font-bold text-xl px-6 py-1 rounded-lg bg-transparent border-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out">Eventos</h1>
                    </Link>
                    <Link href="/gallery" className='z-10'>
                        <h1 className="home-text-shows font-bold text-xl px-6 py-1 rounded-lg bg-transparent border-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out">Galería</h1>
                    </Link>
                    <Link href="/contact" className='z-10'>
                        <h1 className="home-text-contact font-bold text-xl px-6 py-1 rounded-lg bg-transparent border-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out">Contacto</h1>
                    </Link>
                </div>
                <div className="flex flex-end mr-16 mt-2">
                    {!user ? (
                        <button onClick={toggleLogin} className="z-10">
                            <h1 className="text-white m-12 mr-1 font-bold text-lg cursor-pointer rounded-lg px-6 py-1 border-2 hover:bg-white hover:text-black  transition-colors duration-300 ease-in-out">Acceso Miembros</h1>
                        </button>
                    ) : (
                        <Link href={`/${user.type.toLowerCase()}`} className='z-10'>
                            <h1 className="text-white m-12 mr-1 font-bold text-lg cursor-pointer rounded-lg px-6 py-1 border-2 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">Mi coro</h1>
                        </Link>
                    )}
                </div>
            </div>
            <Icons />
            <div className="min-h-[800px]"></div> {/* Espacio adicional para permitir el scroll */}
            <div className='hidden_in_mobile'>
                {showFooter && <Footer />}
                <Footer />
            </div>
        </main>
    )
}
