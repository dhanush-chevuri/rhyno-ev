import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'C:/Users/DELL/rhyno-ev/src/styles/product.css';
import vehicle1 from 'C:/Users/DELL/rhyno-ev/src/assets/images/vehicle1.jpg';
import vehicle2 from 'C:/Users/DELL/rhyno-ev/src/assets/images/vehicle2.jpg';
import vehicle3 from 'C:/Users/DELL/rhyno-ev/src/assets/images/vehicle3.jpg';

const Product = () => {
  const { productId } = useParams();
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const products = {
    'se03-lite': {
      name: 'SE03 Lite',
      image: vehicle1,
      details: `Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!`,
      specifications: {
        "Battery": "1.8Kwh",
        "Battery features": "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
        "Battery warranty": "3 Years",
        "Charging time": "3 hours (12A)",
        "Motor": "1500W",
        "Max speed": "50 km/h",
        "Warranty on electronics": "1 year",
        "Max range (@30km/h)": "100 km",
        "Max range (@45km/h)": "90 km",
        "Max range (@full speed)": "70 km",
        "Other key benefits": "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe"
      },
      colors: ['#FFF225', '#F9ED32', '#424242']
    },
    'se03': {
      name: 'SE03',
      image: vehicle2,
      details: `Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!`,
      specifications: {
        "Battery": "2.7Kwh",
        "Battery features": "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
        "Battery warranty": "3 Years",
        "Charging time": "4 hours (12A)",
        "Motor": "2000W",
        "Max speed": "55 km/h",
        "Warranty on electronics": "1 year",
        "Max range (@30km/h)": "150 km",
        "Max range (@45km/h)": "110 km",
        "Max range (@full speed)": "90 km",
        "Other key benefits": "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe"
      },
      colors: ['#FFF225', '#F9ED32', '#424242']
    },
    'se03-max': {
      name: 'SE03 Max',
      image: vehicle3,
      details: `This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.`,
      specifications: {
        "Battery": "2.7Kwh",
        "Battery features": "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
        "Battery warranty": "3 Years",
        "Charging time": "4 hours (12A)",
        "Motor": "2000W",
        "Max speed": "65 km/h",
        "Warranty on electronics": "1 year",
        "Max range (@30km/h)": "120 km",
        "Max range (@45km/h)": "100 km",
        "Max range (@full speed)": "80 km",
        "Other key benefits": "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe"
      },
      colors: ['#FFF225', '#F9ED32', '#424242']
    }
  };

  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleColorChange = (index) => {
    setCurrentColorIndex(index);
  };

  const handleBuyNow = () => {
    setShowPaymentForm(true);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    setPaymentStatus('Payment Successful! Thank you for your purchase.');
    setShowPaymentForm(false);
  };

  return (
    <div className="product">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.details}</p>
      {product.specifications && (
        <table className="specifications">
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <td className="spec-key">{key}</td>
                <td className="spec-value">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="color-selection">
        {product.colors.map((color, index) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(index)}
          ></button>
        ))}
      </div>
      <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>

      {showPaymentForm && (
        <form className="payment-form" onSubmit={handlePayment}>
          <h2>Payment Details</h2>
          <label>
            Card Number:
            <input type="text" required />
          </label>
          <label>
            Expiry Date:
            <input type="text" required />
          </label>
          <label>
            CVV:
            <input type="text" required />
          </label>
          <button type="submit">Pay</button>
        </form>
      )}

      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </div>
  );
};

export default Product;
