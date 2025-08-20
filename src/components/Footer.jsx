import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaMobileAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#8B5E3C] text-white py-12 w-screen">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Join Our Community */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
            Join our Community
          </h3>
          <div className="flex overflow-hidden rounded-lg mb-6 border border-white/20">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-black outline-none text-sm"
            />
            <button className="bg-white text-black px-5 py-2 font-medium text-sm md:text-base whitespace-nowrap hover:bg-gray-200 transition">
              SUBSCRIBE
            </button>
          </div>

          <h4 className="mb-3 font-semibold">Follow us on</h4>
          <div className="flex space-x-3 text-lg">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaPinterestP].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>

          <h4 className="mt-6 mb-3 font-semibold">Contact Us</h4>
          <p className="flex items-center gap-2 text-sm"><FaMobileAlt /> +91 9514415599</p>
          <p className="flex items-center gap-2 text-sm"><FaEnvelope /> enquiry@deyga.in</p>

          <h4 className="mt-6 mb-3 font-semibold">Download our App</h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10 cursor-pointer"
          />
        </div>

        {/* Shop */}
        <FooterLinks
          title="SHOP"
          links={[
            { name: "Best Sellers", path: "/collection/best-sellers" },
            { name: "Face Care", path: "/collection/face-care" },
            { name: "Hair Care", path: "/collection/hair-care" },
            { name: "Body Care", path: "/collection/body-care" },
            { name: "Lip Care", path: "/collection/lip-care" },
            { name: "Eye Care", path: "/collection/eye-care" },
            { name: "Combos", path: "/collection/combos" }
          ]}
        />

        {/* Information */}
        <FooterLinks
          title="INFORMATION"
          links={[
            { name: "Our Story", path: "pages/our-story" },
            { name: "Contact Us", path: "pages/contact" },
            { name: "FAQs", path: "pages/faqs" },
            { name: "Blogs", path: "/blogs" }
          ]}
        />

        {/* Policies */}
        <FooterLinks
          title="POLICIES"
          links={[
            { name: "Privacy Policy", path: "pages/privacy-policy" },
            { name: "Terms and Conditions", path: "pages/terms" },
            { name: "Shipping & Returns", path: "pages/shipping-returns" }
          ]}
        />

      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i} className="hover:translate-x-1 transition transform">
            <Link to={link.path} className="cursor-pointer hover:underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
