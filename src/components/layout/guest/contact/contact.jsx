import NavBar from '@/components/ui/nav-bar';
import FormContact from './contactForm';

export default async function Contact() {
    let color = "Red"
    return (
        <main className="fixed h-screen">
            <NavBar color={color}/>
            <FormContact />
        </main>
    )
}