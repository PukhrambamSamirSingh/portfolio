import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link as ScrollLink } from "react-scroll"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className="w-full flex items-center justify-between px-4 py-2 sticky top-0 app_background shadow-sm z-10">
            <a href="#home" className="flex items-center">
                <img className="w-14 h-14" src="https://res.cloudinary.com/samircloud/image/upload/v1696336302/m5sbpwirxygmnm7flaj9.png" alt="" />
                <h1 className="font-bold font-sans gradient_text text-xl sm:text-2xl">
                    SamirWeb
                </h1>
            </a>
            <ul className="hidden lg:flex gap-4 md:gap-6">
                <li className="cursor-pointer">
                    <ScrollLink to="home" smooth={true} duration={500}>
                        Home
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="about" smooth={true} duration={500}>
                        About
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="skills" smooth={true} duration={500}>
                        Skills
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        Projects
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="blogs" smooth={true} duration={500}>
                        Blogs
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="feedbacks" smooth={true} duration={500}>
                        Feedbacks
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        Contact Me
                    </ScrollLink>
                </li>
            </ul>
            <div className="flex lg:hidden">
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} className="text-xl" />
                <div className="relative">
                    {toggle && (
                        <ul className="flex flex-col gap-3 absolute right-0 top-10 p-4 app_background w-56 shadow animate__animated animate__flipInX">
                            <li className="cursor-pointer">
                                <ScrollLink to="home" smooth={true} duration={500}>
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="about" smooth={true} duration={500}>
                                    About
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="skills" smooth={true} duration={500}>
                                    Skills
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="projects" smooth={true} duration={500}>
                                    Projects
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="blogs" smooth={true} duration={500}>
                                    Blogs
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="feedbacks" smooth={true} duration={500}>
                                    Feedbacks
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="contact" smooth={true} duration={500}>
                                    Contact Me
                                </ScrollLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
