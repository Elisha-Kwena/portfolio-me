'use client';
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import MailIcon from '@mui/icons-material/Mail';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setLoading(false);
  };

  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Why Me?</h3>
              <ul className="space-y-3 text-blue-200">
                <li><VerifiedIcon className="text-green-400 mr-3" />React proficiency (95% skill level)</li>
                <li><VerifiedIcon className="text-green-400 mr-3" />6+ Next.js projects deployed</li>
                <li><VerifiedIcon className="text-green-400 mr-3" />Full-stack experience</li>
                <li><VerifiedIcon className="text-green-400 mr-3" />Available immediately</li>
                <li><VerifiedIcon className="text-green-400 mr-3" />Strong problem-solving skills</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="mailto:elishakwena@gmail.com" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-center transition flex items-center justify-center gap-2"
              >
                <MailIcon className="text-white"/> Email Me
              </a>
              <a 
                href="https://wa.me/254707575589?text=Hi%20Elisha%2C%20I'm%20interested%20in%20your%20portfolio%20and%20I%20would%20like%20to%20hire%20you"
                target="_blank" 
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold text-center transition flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className='text-white' /> WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                  required
                ></textarea>
                
                {/* STATUS MESSAGE */}
                {status === 'success' && (
                  <div className="bg-green-500/20 text-green-200 p-3 rounded-lg border border-green-400">
                    <i className="fas fa-check-circle mr-2"></i> Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-500/20 text-red-200 p-3 rounded-lg border border-red-400">
                    <i className="fas fa-exclamation-triangle mr-2"></i> Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-semibold text-center transition ${
                    loading
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {loading ? (
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                  ) : (
                    <i className="fas fa-paper-plane mr-2"></i>
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}