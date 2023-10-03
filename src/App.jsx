import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Feedbacks from "./pages/Feedbacks";
import 'animate.css'


const App = () => {

    return (
        <>
            <div className="app_background text-white">
                <Navbar />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Blogs />
                <Feedbacks />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App
