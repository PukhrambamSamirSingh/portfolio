import { projects } from "../data"

const Projects = () => {
    return (
        <div className="w-full min-h-screen p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="projects">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Projects</h1>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div className="w-full flex flex-col gap-4 shadow-2xl p-2 animate__animated animate__zoomInUp" key={project.id}>
                        <img className="object-contain" src={project.image} alt="" />
                        <div className="flex items-center gap-1">
                            <a href={`https://${project.link}`} className="text-blue-500 underline text-xl">Click here</a>
                            <span>to redirect to the website</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold text-gray-500">{project.name}</h2>
                            <span className="text-sm">
                                {project.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
