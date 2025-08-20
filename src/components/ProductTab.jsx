import React, { useState,useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';

function ProductTab() {
  const tabs = {
    "Face Care": [
      { id: 44726823485634, name: "Clear Skin Combo", price: 100, image:"https://deyga.in/cdn/shop/files/deyga_Charcoal_Bath_Bar.jpg?v=1752478392", tag: "Trending Now 🔥" },
      { id: 44726823452866, name: "Foot Butter", price: 200 , image:"https://deyga.in/cdn/shop/files/foot_buter.jpg?v=1744193598", tag: "Must Try ✨" },
      { id: 44726823452877, name: "Charcoal Bath Bar", price:300, image:"https://deyga.in/cdn/shop/files/deyga_Clear_Skin_Combo_01_1024x1024.jpg?v=1731913865", tag: "Top seller 🏆" }
    ],
    "Hair Care": [
      { id: 44673879638210, name: "Vitamin C Foaming Facewash", price: 150, image:"https://deyga.in/cdn/shop/files/Deyga_s_Vitamin_C_Foaming_Face_wash.jpg?v=1750308174&width=533", tag: "Trending Now 🔥" },
      { id: 44673879605442, name: "10% Vitamin C Face Serum", price: 250, image:"https://deyga.in/cdn/shop/files/Deyga_s_Vitamin_C_Serum.jpg?v=1748437520&width=533", tag: "Must Try ✨" },
    ],
    "Body Care": [
      { id: 4467387963829, name: "Hair Growth Oil", price: 300, image:"https://deyga.in/cdn/shop/files/Deyga_s_natural_hair_growth_oil.jpg?v=1752234817&width=533" },
      { id: 4467387963888, name: "Daily Use Healthy Hair Combo", price: 400, image:"https://deyga.in/cdn/shop/files/Deyga_daily-use-healthy-hair-combo-shampoo-and-conditioner-front-view.jpg?v=1752472967&width=533" },
      { id: 4467387963854, name: "Intensive Scalp Repair Anti Dandruff Shampoo 220ml", price: 300, image:"https://deyga.in/cdn/shop/files/Deyga_anti_dandruff_shampoo.jpg?v=1750498864&width=533" },  
    ],
    "Lip Care": [
      { id: 4467387963844, name: "Beetroot Lip Balm", price: 300, image:"https://deyga.in/cdn/shop/files/Beetroot_Lipbalm_Stick_602cc0fd-8bcf-4110-8579-02d8de328798.jpg?v=1754565207&width=533", tag: "Top seller 🏆" },
      { id: 4467387963826, name: "Beetroot Lip Balm - Classic", price: 400, image:"https://deyga.in/cdn/shop/files/Deyga_Beetroot_Lip_Balm_Classic.jpg?v=1750409938&width=533" },
    ],
  };

  const [tab, setTab] = useState('Face Care');

  const { addToCart } = useContext(CartContext);


 return (
    <div className="p-6">
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(tabs).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => setTab(tabKey)}
            className={`px-5 py-2 rounded-full border transition ${
              tab === tabKey
                ? "bg-[#8B5E3C] text-white border-[#8B5E3C]"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tabKey}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {tabs[tab].map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductTab;
