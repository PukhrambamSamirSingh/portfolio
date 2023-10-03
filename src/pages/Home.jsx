import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs"

const Home = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const delay = 100; // Delay between text changes in milliseconds

    useEffect(() => {
        const text = ["Hello! I am Pukhrambam Samir Singh!", "I am a full-stack web developer!"]
        let currentIndex = 0;
        let currentText = "";

        const interval = setInterval(() => {
            if (currentIndex < text[index].length) {
                currentText += text[index][currentIndex];
                setDisplayText(currentText);
                currentIndex++;
            } else {
                clearInterval(interval)
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % text.length);
                    setDisplayText("");
                }, delay * 3); // Adjust the delay as needed
            }
        }, delay);

        return () => clearInterval(interval);
    }, [index]);
    const handleDownload = () => {
        const a = document.createElement('a')
        a.style.display = 'none';
        const fileURL = '../../src/assets/resume.pdf'
        a.setAttribute('download', 'resume.pdf')
        a.setAttribute('href', fileURL)
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-around p-4 md:px-12 lg:px-16 gap-4" id="home" style={{
            minHeight: "calc(100vh - 60px)"
        }}>
            <div className="w-full sm:w-1/2 flex flex-col gap-5 h-1/2">
                <div className="flex gap-2 items-center">
                    <img className="w-6 h-6 sm:w-10 sm:h-10" src="https://static.vecteezy.com/system/resources/previews/012/496/491/original/flat-sparkling-star-icon-illustration-png.png" alt="" />
                    <h2 className="text-sm sm:text-lg italic">Welcome to my personal portfolio!</h2>
                </div>
                <div className="h-36 md:h-52">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl gradient_text_intro">{displayText}</h1>
                </div>
                <button className="border flex items-center justify-center gap-2 p-2 max-w-max text-sm bg-orange-500 rounded-md hover:bg-transparent duration-200" onClick={handleDownload}>Download CV
                    <BsDownload />
                </button>
            </div>
            <div className="w-full sm:w-1/2 h-1/2">
                <img className="animate__animated animate__zoomInDown animate__slower w-full object-contain" src="https://cdni.iconscout.com/illustration/premium/thumb/business-planning-6129726-5059670.png" alt="" />
            </div>
        </div>
    )
}

export default Home