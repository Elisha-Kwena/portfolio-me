export default function About(){
    return(
        <>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Elisha</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Passionate developer crafting innovative web solutions</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                As a <span className="font-semibold text-blue-600">third-year Computer Science student</span> at Kisii University, 
                                I specialize in building <span className="font-semibold">scalable web applications</span> that solve real-world problems. 
                                With hands-on experience in both frontend and backend technologies, I create seamless user experiences from concept to deployment.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                My journey began with simple HTML/CSS websites and evolved into complex full-stack applications. 
                                I'm particularly passionate about <span className="font-semibold">React ecosystem</span>, modern CSS frameworks, 
                                and integrating AI/ML models into web applications.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="font-semibold text-lg mb-2">🎓 Education</h3>
                                <p className="text-blue-700">BSc Computer Science • Kisii University • 2023-2026</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="font-semibold text-lg mb-2">💼 Experience</h3>
                                <p className="text-green-700">2+ Years Web Development • 5+ Live Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                            <h3 className="font-bold text-xl mb-4">Services</h3>
                            <ul className="space-y-2 text-blue-100">
                                <li><i className="fas fa-check mr-2"></i>React Web Apps</li>
                                <li><i className="fas fa-check mr-2"></i>UI/UX Design</li>
                                <li><i className="fas fa-check mr-2"></i>Backend APIs</li>
                                <li><i className="fas fa-check mr-2"></i>Database Design</li>
                            </ul>
                        </div>
                        <div className="bg-linear-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl">
                            <h3 className="font-bold text-xl mb-4">Stats</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between"><span>Projects</span><span className="font-bold">15+</span></div>
                                <div className="flex justify-between"><span>GitHub Stars</span><span className="font-bold">200+</span></div>
                                <div className="flex justify-between"><span>Code Lines</span><span className="font-bold">10k+</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}