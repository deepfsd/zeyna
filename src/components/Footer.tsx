import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-bold tracking-tighter">
            ZEYNA<span className="text-rose-500">.</span>
          </Link>
          <p className="text-neutral-400 font-light leading-relaxed max-w-xs">
            A premium creative agency delivering forward-thinking digital experiences and innovative solutions.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
              <Twitter size={18} className="group-hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group">
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-4">
            <li><Link href="#about" className="text-neutral-400 hover:text-rose-400 transition-colors">About Us</Link></li>
            <li><Link href="#services" className="text-neutral-400 hover:text-rose-400 transition-colors">Services</Link></li>
            <li><Link href="#portfolio" className="text-neutral-400 hover:text-rose-400 transition-colors">Our Work</Link></li>
            <li><Link href="#team" className="text-neutral-400 hover:text-rose-400 transition-colors">Team</Link></li>
            <li><Link href="#contact" className="text-neutral-400 hover:text-rose-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-neutral-400 hover:text-rose-400 transition-colors">Blog</Link></li>
            <li><Link href="#" className="text-neutral-400 hover:text-rose-400 transition-colors">Case Studies</Link></li>
            <li><Link href="#" className="text-neutral-400 hover:text-rose-400 transition-colors">Documentation</Link></li>
            <li><Link href="#" className="text-neutral-400 hover:text-rose-400 transition-colors">Help Center</Link></li>
            <li><Link href="#" className="text-neutral-400 hover:text-rose-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="text-neutral-400 font-light mb-6">
            Subscribe to get the latest news and updates from our creative team.
          </p>
          <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-white text-black font-medium py-3 rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Zeyna Creative Agency. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
