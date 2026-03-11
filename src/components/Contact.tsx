"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative text-white border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-rose-600/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Col - Contact Info */}
        <div className="space-y-12 z-10">
          <div>
            <div className="flex items-center gap-4 text-rose-500 font-medium tracking-[0.2em] uppercase text-sm mb-6">
              <span className="w-12 h-px bg-rose-500"></span>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
              Let's create something <br />
              extraordinary.
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed max-w-lg">
              Whether you have a project in mind or just want to chat about the possibilities, we'd love to hear from you.
            </p>
          </div>

          <div className="space-y-8 mt-12">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-colors duration-300">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-1">Email Us</h4>
                <a href="mailto:hello@zeyna.agency" className="text-xl font-bold tracking-tight text-white hover:text-rose-500 transition-colors">
                  hello@zeyna.agency
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-colors duration-300">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-1">Call Us</h4>
                <a href="tel:+1234567890" className="text-xl font-bold tracking-tight text-white hover:text-rose-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-colors duration-300">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-1">Visit Us</h4>
                <p className="text-xl font-bold tracking-tight text-white">
                  123 Creative Street, <br />
                  Design District, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col - Contact Form */}
        <div className="z-10 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl glass relative overflow-hidden">
          {/* subtle background glow inside form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-[50px] pointer-events-none"></div>

          <h3 className="text-3xl font-bold tracking-tight text-white mb-8">Send a message</h3>

          {status.message && (
            <div className={`mb-6 p-4 rounded-xl border ${status.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'} text-sm font-medium`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-rose-500 focus:bg-white/10 transition-all duration-300 rounded-t-lg"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-rose-500 focus:bg-white/10 transition-all duration-300 rounded-t-lg"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-white/5 border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-rose-500 focus:bg-white/10 transition-all duration-300 rounded-t-lg resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full mt-4 px-8 py-5 bg-white text-black font-bold uppercase tracking-widest overflow-hidden rounded-xl flex items-center justify-center transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center gap-3">
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </span>
              <div className="absolute inset-0 bg-rose-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-3 text-transparent group-hover:text-white transition-colors duration-500 absolute inset-0 justify-center">
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={18} className="translate-x-1 -translate-y-1" />}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
