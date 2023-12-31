import { BsTwitter, BsGithub } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoLocationSharp } from "react-icons/io5"

const Contact = () => {
    return (
        <div className="w-full min-h-[70vh] sm:min-h-[80vh] p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="contact">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Contact Me</h1>
            <div className="flex flex-wrap gap-4 sm:gap-10">
                <div className="bg-blue-900 p-2 flex items-center gap-2 rounded-md">
                    <MdEmail className="text-xl" />
                    <span>portfoliocontact789@gmail.com</span>
                </div>
                <div className="bg-blue-900 p-2 flex items-center gap-2 rounded-md">
                    <IoLocationSharp className="text-xl" />
                    <span>Jiribam, Manipur</span>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-80 shadow-2xl flex flex-col items-center justify-between p-4">
                <h1 className="text-xl sm:text-3xl">Feel free to contact me!</h1>
                <img className="w-32 h-32 rounded-full object-cover border" src="https://res.cloudinary.com/samircloud/image/upload/v1696346456/q8magttsvyngb2ily2hp.jpg" alt="" />
                <div className="flex gap-4">
                    <a href="https://github.com/PukhrambamSamirSingh"><BsGithub className="text-xl" /></a>
                    <a href="https://www.linkedin.com/in/samir-robin-6576bb251/"><FaLinkedinIn className="text-xl" /></a>
                    <a href="https://twitter.com/PukhrambamSamir"><BsTwitter className="text-xl" /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
