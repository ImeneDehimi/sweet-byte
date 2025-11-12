import { Instagram, Facebook, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#755541] text-white py-10"
  data-aos="fade-up"
      id="footer"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Dear Ones 🍪</h2>
          <p className="mt-3 text-[#d5b29b]">
            Homemade cookies made with love and real ingredients.  
            Taste the difference in every bite!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-amber-950 rounded-full hover:bg-amber-900 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-amber-950 rounded-full hover:bg-amber-900 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="tel:+213555555555"
              className="p-2 bg-amber-950 rounded-full hover:bg-amber-900 transition"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:info@cookiebliss.com"
              className="p-2 bg-amber-950 rounded-full hover:bg-amber-900 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#d5b29b]">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#menu" className="hover:text-white transition">Our Cookies</a></li>
            <li><a href="#calculator" className="hover:text-white transition">Price Calculator</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-[#d5b29b]">
            <li>Email: <a href="mailto:info@cookiebliss.com" className="hover:text-white">info@cookiebliss.com</a></li>
            <li>Phone: +213 675365156</li>
            <li>Location: Medea, Algeria</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-amber-900 pt-6 text-center text-[#d5b29b] text-sm">
        © {new Date().getFullYear()} Dear Ones. All rights reserved.
      </div>
    </footer>
  );
}
