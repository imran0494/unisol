import React, { useState } from "react";
import "./StartUpProject.css"; // Import the CSS file for styling

const items = [
  {
    id: 1,
    title: "Agriculture Drone",
    description:
      "We provide cutting-edge agricultural drone technology to maximize crop management and yield. Sergisole's advanced drone solutions deliver precision agriculture at its best.",
    image: "/droneimg.png", // Add image URL
  },
  {
    id: 2,
    title: "Medicine Dispenser",
    description:
      "The Strom® 2.0 series stands at the forefront of electrosurgery, embodying advanced technology and intelligent features that redefine surgical precision and safety. Incorporating Smart Tissue Sensing Technology powered by an ARM Core processor, these devices revolutionize the surgical landscape.",
    image: "/medicineimg.png", // Add image URL
  },
  {
    id: 3,
    title: "Hospital Laundry",
    description:
      "Our specialized hospital laundry services ensure pristine cleanliness and integrity for StartUp linens and garments by ensuring top-tier hygiene and efficiency. Trust our dedicated hospital laundry solutions for impeccable sterilization and handling of medical textiles, prioritizing infection control and patient well-being.",
    image: "/laundryimg.png", // Add image URL
  },
];

const StartUpProject = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]); // Set default item

  return (
    <div className="startup-container">
      {/* Background Image Section */}
      <div
        className="startup-bg"
        style={{ backgroundImage: `url("/startupbanner-1.png")` }} // Reference the image from the public folder
      >
        <div className="startup-text">
          <h1>Start Up Project</h1>
          <p>
            Start Up Project / <span>Agriculture Drone</span>
          </p>
        </div>
      </div>

      {/* Text Below the Image */}
      <div className="content-section">
        <h1>Ignite Sphere</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      {/* Center Text Section */}
      <div className="center-text">
        <h3>HealthCare</h3>
        <h1>Medical Equipment's</h1>
        <p>
          Discover Unrivaled Medical Innovations at UNISOL - Elevating Surgical
          Precision and Patient Care with Cutting-Edge Technologies.
        </p>
      </div>

      {/* Item List Section */}
      <div className="items-list">
        {items.map((item) => (
          <p
            key={item.id}
            className={`item-button ${
              selectedItem.id === item.id ? "active" : ""
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item.title}
          </p>
        ))}
      </div>

      {/* Detailed Content Section */}
      <div className="item-details">
        <img
          src={selectedItem.image}
          alt={selectedItem.title}
          className="item-image"
        />
        <div className="item-description">
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <button className="read-more-button">
            Read More
            <svg
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "8px" }} // Add margin to space out from text
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="contact-us"
        style={{ backgroundImage: `url("/contact-us-bg.png")` }}
      >
        <div className="contact-us-text">
          <p>
            Let's Try! to <span>Support</span>
          </p>
          <h2>Be Ready for the Ever-Changing World</h2>
          <button>Contact US</button>
          <button>Talk to Us</button>
        </div>
      </div>

      <div className="profile">
        <div className="profile-image">
          {/* Add image here */}
          <img src="/JamesRouse.png" alt="Profile" />
        </div>
        <div className="profile-content">
          <h1>Profit</h1>
          <h2>James Rouse</h2>
          <p>
            Profit is not the legitimate purpose of business; the legitimate
            purpose of business is to provide a product or service that people
            need and do it so well that it’s profitable
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartUpProject;
