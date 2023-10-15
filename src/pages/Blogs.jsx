const Blogs = () => {
    return (
        <div className="w-full min-h-[50vh] p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="blogs">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Blogs</h1>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="w-full flex flex-col gap-4 shadow-2xl p-2 animate__animated animate__zoomInUp">
                    <img className="object-contain" src="https://res.cloudinary.com/samircloud/image/upload/v1697384726/uunih7lgzsxylennf9jd.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold text-gray-500">FoodVista</h2>
                        <span className="text-sm">
                            I am currently working on a MERN-stack web application built with Vite, ReactJS, and styled with Tailwind CSS. This web application is designed to be fully functional, with a robust authentication method using JWT tokens and google authentication method. It incorporates various state management tools, including Redux, Context API, and Tanstack Query, along with React hooks and other modern web development technologies. This project is a significant addition to my portfolio and will be deployed in the near future. It represents a culmination of my skills and experience, and {"I'm"} excited to share it.
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 shadow-2xl p-2 animate__animated animate__zoomInUp">
                    <p className="text-md">
                        After completing my food web application, I plan to make my portfolio website dynamic and also update my e-commerce website.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs
