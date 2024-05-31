'use client';

import CustomCarousel from '@/components/ui/carousel';
import NavBar from '@/components/ui/nav-bar';
import NavBarPhone from '@/components/ui/nav-bar_phone';

export default function Gallery() {
    const color = "Yellow";

    const itemsRevival = [
        { type: 'image', src: '/images/carousel/LRC/image1.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/P8YkdJIlysU?si=xeMJLI9kX-f6lY6w&amp;start=1' },
        { type: 'image', src: '/images/carousel/LRC/image2.jpg' },
        { type: 'image', src: '/images/carousel/LRC/image3.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/-1XXorgoDJw?si=71L90QjCwJHUy4dy&amp;start=1' },
        { type: 'image', src: '/images/carousel/LRC/image4.jpg' },
    ];

    const itemsForward = [
        { type: 'image', src: '/images/carousel/MF/image1.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/P8YkdJIlysU?si=xeMJLI9kX-f6lY6w&amp;start=1' },
        { type: 'image', src: '/images/carousel/MF/image2.jpg' },
        { type: 'image', src: '/images/carousel/MF/image3.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/-1XXorgoDJw?si=71L90QjCwJHUy4dy&amp;start=1' },
        { type: 'image', src: '/images/carousel/MF/image4.jpg' },
    ];

    return (
        <main className="h-screen overflow-x-hidden bg-gray-200">
            <div className="hidden_in_mobile">
                <NavBar color={color} />
            </div>
            <div className="hidden_in_pc">
                <NavBarPhone color={color} />
            </div>
            <div className='hidden_in_pc'>
                <div className='parallax_gallery_phone' style={{ backgroundImage: "url('/images/aboutusparallax2.jpg')" }} />
            </div>
            <div className='hidden_in_mobile'>
                <div className='parallax' style={{ backgroundImage: "url('/images/aboutusparallax2.jpg')" }} />
            </div>
            <div className="w-full">
                <div className='aboutus_text_pc pc_container_gallery mobile_container_gallery'>
                    <div className='pc_halfwidth titletext_container'>
                        <div>
                            <h1 className='font-bold text-4xl mt-12 font-[GoodBrush]'>MAS GOSPEL</h1>
                            <h1 className='aboutus_titletext2 font-[GoodBrush]'>LET <span className='text-customYellow font-[GoodBrush]'>REVIVAL</span> COME</h1>
                            <h1 className="font-[GoodBrush]">2024</h1>
                        </div>
                    </div>
                    <div className='pc_thirdwidth mobile_gallery_text_width mt-[50px] text-justify_pc'>
                        Nuestro proyecto "Let Revival Come" es un ejemplo perfecto de lo que nos hace especiales.
                        Con este proyecto, queremos llevar la música gospel a más personas y compartir el mensaje de Dios con el mundo.
                        Estamos organizando una serie de conciertos y eventos especiales, y también estamos trabajando en un nuevo álbum.
                        Estamos seguros de que este proyecto será un éxito, y que nos ayudará a alcanzar a aún más personas con nuestra música.
                    </div>
                </div>

                <div className="carrousel_pc carrousel_mobile">
                    <CustomCarousel items={itemsRevival} />
                </div>

                <hr className="border-black w-96 mx-auto mt-8" />
                <div className='aboutus_text_pc pc_container_gallery mobile_container_gallery'>
                    <div className='pc_halfwidth titletext_container'>
                        <div>
                            <h1 className='font-bold text-4xl mt-12 font-[GoodBrush]'>MAS GOSPEL</h1>
                            <h1 className='aboutus_titletext2 font-[GoodBrush]'>MOVING <span className='text-customYellow font-[GoodBrush]'>FORWARD</span></h1>
                            <h1 className="font-[GoodBrush]">2023</h1>
                        </div>
                    </div>
                    <div className='pc_thirdwidth mobile_gallery_text_width mt-[50px] text-justify_pc'>
                        Nuestro proyecto "Let Revival Come" es un ejemplo perfecto de lo que nos hace especiales.
                        Con este proyecto, queremos llevar la música gospel a más personas y compartir el mensaje de Dios con el mundo.
                        Estamos organizando una serie de conciertos y eventos especiales, y también estamos trabajando en un nuevo álbum.
                        Estamos seguros de que este proyecto será un éxito, y que nos ayudará a alcanzar a aún más personas con nuestra música.
                    </div>
                </div>

                <div className="carrousel_pc carrousel_mobile">
                    <CustomCarousel items={itemsForward} />
                </div>
            </div>

            <style jsx>{`
                .parallax {
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 400px;
                }
            `}</style>
        </main>
    );
}
