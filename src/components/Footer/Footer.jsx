import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"; // यहाँ FaXTwitter जोड़ा है और fa6 का यूज़ किया है
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="bg-[#354770] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/logo.png"
                alt="Tech Insights Logo"
                className="w-20 h-20 rounded-full border-2 border-white shadow-lg"
              />

              <div>
                <h2 className="text-3xl font-bold whitespace-nowrap">
                  Tech Insights
                </h2>

                <p className="text-blue-100 text-sm">
                  Java | DSA | Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-gray-200 leading-7">
              Building scalable, modern web applications and always ready for
              new opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/ravikumar892600/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/ravikumar892600/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/ravikumar892600/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition duration-300"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://x.com/ravikumar892600"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition duration-300"
              >
                <FaXTwitter size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <HashLink smooth to="/#home" className="hover:text-blue-200">
                  Home
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#about" className="hover:text-blue-200">
                  About
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#skills" className="hover:text-blue-200">
                  Skills
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/#projects"
                  className="hover:text-blue-200"
                >
                  Projects
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/contact" className="hover:text-blue-200">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Contact</h3>

            <div className="space-y-5">
              <a
                href="mailto:ravikumar892600@gmail.com"
                className="flex items-center gap-3 hover:text-blue-200"
              >
                <MdEmail size={22} />
                <span>ravikumar892600@gmail.com</span>
              </a>

              <a
                href="tel:+919097892600"
                className="flex items-center gap-3 hover:text-blue-200"
              >
                <MdPhone size={22} />
                <span>+91 9097892600</span>
              </a>

              <div className="flex items-center gap-3">
                <MdLocationOn size={22} />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300">
          © 2026 Ravi Kumar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
