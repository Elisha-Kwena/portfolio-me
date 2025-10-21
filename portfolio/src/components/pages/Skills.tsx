export default function Skills(){
    return(
        <>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                <p className="text-xl text-gray-600">Proficient in modern web technologies</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6">Frontend</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">React</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
                            </div>
                            <span className="text-sm font-medium">95%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Next.js</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-800 h-2 rounded-full w-[90%]" ></div>
                            </div>
                            <span className="text-sm font-medium">90%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Tailwind CSS</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-cyan-500 h-2 rounded-full w-[92%]"></div>
                            </div>
                            <span className="text-sm font-medium">92%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">JavaScript (ES6+)</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full w-[97%]"></div>
                            </div>
                            <span className="text-sm font-medium">97%</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-green-600 mb-6 ">Backend</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Python</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full w-[88%]"></div>
                            </div>
                            <span className="text-sm font-medium">88%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Django</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full w-[85%]" ></div>
                            </div>
                            <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Node.js</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-[80%]" ></div>
                            </div>
                            <span className="text-sm font-medium">80%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">PostgreSQL</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full w-[82%]"></div>
                            </div>
                            <span className="text-sm font-medium">82%</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-6">Tools & Design</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Figma</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-pink-500 h-2 rounded-full w-[90%]" ></div>
                            </div>
                            <span className="text-sm font-medium">90%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Git & GitHub</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-800 h-2 rounded-full w-[95%]" ></div>
                            </div>
                            <span className="text-sm font-medium">95%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">C Programming</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full w-[85%]"></div>
                            </div>
                            <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium">VS Code</span>
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full w-[98%]"></div>
                            </div>
                            <span className="text-sm font-medium">98%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}