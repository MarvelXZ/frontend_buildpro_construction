import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">BuildPro</h3>
            <p className="text-sm">
              Vaš pouzdan partner za sve vrste građevinskih radova.
              Kvalitet i profesionalnost su naš prioritet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="hover:text-orange-500 transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-orange-500 transition-colors">
                  Usluge
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-500 transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Usluge</h4>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 transition-colors">Izgradnja kuća</li>
              <li className="hover:text-orange-500 transition-colors">Renoviranje</li>
              <li className="hover:text-orange-500 transition-colors">Dizajn enterijera</li>
              <li className="hover:text-orange-500 transition-colors">Konsalting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone className="text-orange-600" />
                <span>+381 11 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-orange-600" />
                <span>info@buildpro.rs</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-600" />
                <span>Beograd, Srbija</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-zinc-300 hover:text-orange-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-zinc-300 hover:text-orange-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-zinc-300 hover:text-orange-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BuildPro. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
