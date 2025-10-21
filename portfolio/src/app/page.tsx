import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

import About from "@/components/pages/About";
import Skills from "@/components/pages/Skills";
import Projects from "@/components/pages/Projects";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";

export default function Home() {
  return (
    <>
      <main className="w-screen min-h-screen bg-gray-50">
        {/* HERO SECTION */}
        <section id="home" className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-16">
          <div className="md:w-[80%] w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Elisha <span className="text-blue-300">Kwena</span>
                </h1>
                <p className="text-xl text-blue-100">Full Stack Web Developer | UI/UX Designer | Backend Engineer</p>
                <p className="text-lg text-blue-200">Third Year Computer Science • Kisii University</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:elishakwena@gmail.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                  <i className="fas fa-envelope"></i> Email Me
                </a>
                <a href="https://github.com/Elisha-Kwena" target="_blank" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
              <div className="flex items-center gap-6 text-blue-200">
                <a href="https://www.linkedin.com/in/elisha-kwena-9a09452b3/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BH7zMJP2ATU%2BswmztBEmxoQ%3D%3Da" target="_blank">
                  <LinkedInIcon className="text-2xl text-blue-400" />
                </a>
                <a href="https://x.com/KwenaElisha" target="_blank">
                  <XIcon className="text-2xl text-blue-400" />
                </a>
                <a href="https://github.com/Elisha-Kwena" target="_blank">
                  <GitHubIcon className="text-2xl text-blue-400" />
                </a>
              </div>
            </div>
            
            {/* FIXED IMAGE SECTION - NO RIGHT OVERFLOW */}
            <div className="relative overflow-hidden">
              <div className="w-80 h-[400px] bg-blue-600/20 rounded-full absolute -top-10 -right-10 blur-3xl"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="md:w-[400px] h-[400px] bg-linear-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
                  <Image
                    src="/images/elisha.png"
                    alt="Elisha Kwena"
                    fill
                    className="object-cover object-top rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-white">
          <div className="md:w-[80%] w-full mx-auto">
            <About />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 bg-gray-50">
          <div className="md:w-[80%] w-full mx-auto">
            <Skills />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-white">
          <div className="md:w-[80%] w-full mx-auto">
            <Projects />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-linear-to-r from-blue-900 to-indigo-900 text-white">
          <div className="md:w-[80%] w-full mx-auto">
            <Contact />
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}