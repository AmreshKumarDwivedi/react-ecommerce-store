import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  return (
    <section className="bg-[#fefdf7] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left side: Heading & text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Have questions, feedback, or need assistance? Fill out the form, and our team will get back to you shortly.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ contact@example.com</li>
            <li>📍 123 Business Street, City, Country</li>
          </ul>
        </div>

        {/* Right side: Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <form className="grid grid-cols-1 gap-5">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Company */}
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Phone */}
            <div className="flex gap-3">
              <div className="relative w-28">
                <select
                  className="appearance-none w-full border border-gray-300 rounded-md p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>IN</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 absolute right-2 top-3 text-gray-500 pointer-events-none" />
              </div>
              <input
                type="text"
                placeholder="123-456-7890"
                className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Message"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>

            {/* Checkbox */}
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-green-400" />
              By selecting this, you agree to our{" "}
              <a href="#" className="text-green-600 font-medium">privacy policy</a>.
            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold transition-colors duration-200"
              style={{ backgroundColor: "#249d42" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#1f8a3a")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#249d42")
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
