import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Start from "./components/Start"

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Reviews />
            <Start />
            <Footer />
        </main>
    );
}
