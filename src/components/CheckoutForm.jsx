import React, { useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';

countries.registerLocale(enLocale);

function CheckoutForm() {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
  });

  const countryOptions = Object.entries(countries.getNames("en")).map(
    ([code, name]) => ({ code, name })
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, country: selectedCountry });
  };




//   fetch("https://nominatim.openstreetmap.org/search?q=Connaught+Place,+New+Delhi,+India&format=json&addressdetails=1", {
//   headers: {
//     "User-Agent": "MyAppName/1.0 (myemail@example.com)" // Replace with your actual info
//   }
// })
//   .then(res => res.json())
//   .then(data => {
//     if (data.length > 0) {
//       console.log("📍 Address found:");
//       console.log("Display Name:", data[0].display_name);
//       console.log("Postal Code:", data[0].address.postcode);
//     } else {
//       console.log("❌ Address not found.");
//     }
//   })
//   .catch(err => console.error("Error:", err));

// fetch('https://nominatim.openstreetmap.org/search?postalcode=110001&country=IN&format=json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));



  return (
    <div className="max-w-xl mx-auto p-6 bg-white">
      <h2 className="text-lg font-semibold mb-4">Shipping address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          name="address1"
          placeholder="Address"
          value={formData.address1}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          name="address2"
          placeholder="Apartment, suite, etc. (optional)"
          value={formData.address2}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3"
          required
        />
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 bg-white"
          required
        >
          <option value="">Select Country</option>
          {countryOptions.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="province"
          placeholder="State / Province"
          value={formData.province}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3"
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP / Postal Code"
          value={formData.zip}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3"
          required
        />
       <PhoneInput
  className="w-full border border-gray-300 rounded-md p-3"
  international
  value={formData.phone}
  onChange={(value) =>
    setFormData((prev) => ({ ...prev, phone: value }))
  }
    defaultCountry={selectedCountry}  
  placeholder="Enter phone number"
/>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-medium py-3 rounded-md hover:bg-green-700 transition"
        >
          Continue to shipping
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
