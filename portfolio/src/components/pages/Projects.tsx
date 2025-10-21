import banner1 from "../../../public/images/motech.png"
import banner2 from "../../../public/images/animehub.png"
import banner3 from "../../../public/images/onfarm.png"
import banner4 from "../../../public/images/kaura.png"
import banner5 from "../../../public/images/ark.png"
import banner6 from "../../../public/images/quotes.png"
import Image from "next/image"
const projects = [
              {
                title: 'Motech Institute Technology Training Institute',
                desc: 'A comprehensive college website featuring course catalogs, faculty profiles, admissions portal, student resources, and event calendars. Includes dynamic content management for announcements and blog posts. Primarily frontend-focused with backend integration for user authentication and data handling.',
                tech: [
                    "Next.js",
                    "Tailwind css",
                    "Python (Django)",
                ],
                link: 'https://motech-institute-pduy.vercel.app/',
                banner:banner1,
              },
              {
                title: 'AnimeFanBase',
                desc: 'An engaging platform for anime enthusiasts to browse, rate, and review anime series and movies. Features personalized recommendations based on user preferences, discussion forums, watchlists, and API integrations for real-time anime data. Emphasis on responsive design and smooth user experience.',
                tech: [
                    "Next.js",
                    "Tailwind css",
                    "Python (Django)",
                ],
                link: 'https://animefanbase.netlify.app/home',
                banner:banner2,
              },
              {
                title: 'OnFarm',
                desc: 'An innovative e-commerce platform for agricultural investments where users purchase products like seeds or livestock and earn daily returns through farming programs. Includes user dashboards for tracking earnings, secure payment gateways, product catalogs, and admin tools for managing investments. Frontend-heavy with backend for transaction processing.',
                tech:[
                    "Next.js",
                    "Tailwind css",
                    "Python (Django)",
                ],
                link: 'https://onfarm-cyan.vercel.app/dashboard',
                banner:banner3,
              },
              {
                title: 'Kaura Chicken Farm',
                desc: 'A professional website for Kaura Chicken Farm showcasing poultry products, farming techniques, pricing, and online ordering system. Features include a blog on sustainable farming, contact forms, photo galleries of the farm, and integration with maps for location. Focused on clean, mobile-responsive design to attract customers.',
                tech: [
                    "Next.js",
                    "Tailwind css",
                    "Python (Django)",
                ],
                link: 'https://kaura-chicken-enterprise.netlify.app/',
                banner:banner4,
              },

              {
                title: 'Ark of God Ministry',
                desc: 'A welcoming church website with sections for sermon archives (audio/video), event scheduling, online donations, prayer requests, and community outreach programs. Includes member registration, newsletter signup, and live streaming integration. Prioritizes accessibility and intuitive navigation for all users.',
                tech: [
                    "Next.js",
                    "Tailwind css",
                    "Python (Django)",
                ],
                link: 'https://ark-of-god-ministry.netlify.app/',
                banner:banner5,
              },
                            {
                title: 'Quotes Generator',
                desc: 'A simple yet entertaining web app that fetches and displays random quotes from the Ninja API. Users can generate new jokes with a click, categorize by type, share on social media, and save favorites. Built with vanilla technologies for lightweight performance and easy deployment.',
                tech:[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Ninja API"
                ] ,
                link: 'https://quotes-generator-nine-peach.vercel.app/',
                banner:banner6,
              },
            ]

export default function Projects(){
    return(
        <>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                <p className="text-xl text-gray-600">Real-world applications showcasing my expertise</p>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,index)=>(
                <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="bg-linear-to-r from-blue-500 to-blue-600 h-52 relative overflow-hidden">
                        <Image
                            src={project.banner}
                            alt={project.title}
                            fill
                            className="object-top object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech,id)=>(
                                <span key={id} className={`bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm `}>{tech}</span>
                            ))}
                            {/* <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Next.js</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Python AI</span> */}
                        </div>
                        <a href={project.link} target="_blank" className="text-blue-600 font-semibold hover:underline flex items-center">
                            View Project <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                </div>
                ))}
                {/* <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="bg-linear-to-r from-blue-500 to-blue-600 h-48 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 right-4">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">Live Demo</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">M-Kulima AI</h3>
                        <p className="text-gray-600 mb-4">AI-powered crop disease diagnosis using image recognition with Swahili TTS support for Kenyan farmers.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Next.js</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Python AI</span>
                        </div>
                        <a href="https://github.com/elishakwena/m-kulima" target="_blank" className="text-blue-600 font-semibold hover:underline flex items-center">
                            View Project <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                </div> */}

                {/* <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="bg-linear-to-r from-green-500 to-green-600 h-48 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">Tech Social Platform</h3>
                        <p className="text-gray-600 mb-4">Social media for developers supporting code snippets, crypto discussions, and multi-media posts.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Django</span>
                            <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">Tailwind</span>
                        </div>
                        <a href="https://github.com/elishakwena/tech-social" target="_blank" className="text-blue-600 font-semibold hover:underline flex items-center">
                            View Project <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                </div> */}
{/* 
                <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="bg-linear-to-r from-purple-500 to-pink-600 h-48 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">School Admissions System</h3>
                        <p className="text-gray-600 mb-4">Dynamic admission form with PDF generation, email notifications, and admin dashboard.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Nodemailer</span>
                        </div>
                        <a href="https://github.com/elishakwena/admissions-form" target="_blank" className="text-blue-600 font-semibold hover:underline flex items-center">
                            View Project <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                </div> */}

                {/* <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                    <div className="bg-linear-to-r from-indigo-500 to-purple-600 h-48 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">OAuth Auth System</h3>
                        <p className="text-gray-600 mb-4">Secure authentication with GitHub, Google, Discord OAuth integrated with JWT and role-based access control.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">NextAuth</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Django REST</span>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">JWT</span>
                        </div>
                        <a href="https://github.com/elishakwena/auth-system" target="_blank" className="text-blue-600 font-semibold hover:underline flex items-center">
                            View Project <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}