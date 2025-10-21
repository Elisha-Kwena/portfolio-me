
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="mailto:elishakwena@gmail.com" className="text-gray-400 hover:text-white"><EmailIcon className=" text-xl"/></a>
                <a href="https://github.com/elishakwena" target="_blank" className="text-gray-400 hover:text-white">< GitHubIcon  className=" text-xl"/></a>
                <a href="https://linkedin.com/in/elishakwena" target="_blank" className="text-gray-400 hover:text-white"><LinkedInIcon className=" text-xl"/></a>
            </div>
            <p className="text-gray-400">© 2025 Elisha Kwena | Kisii University</p>
            <p className="text-sm text-gray-500 mt-2">Ready for React Internship or any job • Available Immediately</p>
        </div>
    </footer>
    )
}