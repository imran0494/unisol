import React, { useState } from "react";
import "./Hospitality.css"; // Import the CSS file for styling

const hospitalityItems = [
  {
    id: 1,
    title: "Hotels Management",
    description:
      "Experience unparalleled luxury and comfort with our premium hotel services. From elegant rooms to world-class amenities, we redefine hospitality at every step.",
    image: "/hotel.png", // Add image URL
  },
  {
    id: 2,
    title: "Sports Management",
    description:
      "Indulge in a culinary journey like no other at our gourmet restaurant. Our chefs craft exquisite dishes that tantalize your taste buds and leave you craving for more.",
    image: "/sports.png", // Add image URL
  },
];

const Hospitality = () => {
  const [selectedItem, setSelectedItem] = useState(hospitalityItems[0]); // Set default item

  return (
    <div className="hospitality-container">
      {/* Background Image Section */}
      <div
        className="hospitality-bg"
        style={{ backgroundImage: `url("/hospitalitybanner-1.png")` }} // Reference the image from the public folder
      >
        <div className="hospitality-text">
          <h1>Hospitality Services</h1>
          <p>
            Hospitality Services / <span>Hospitality</span>
          </p>
        </div>
      </div>

      {/* Text Below the Image */}
      <div className="content-section">
        <h1>Company Name</h1>
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
        <h3>hospitality</h3>
        <h1> Hotel Managenment</h1>
        <p>
          At Luxe, we take pride in offering unmatched hospitality services that
          elevate your experience. Explore our offerings and indulge in the
          finest comforts and services tailored just for you.
        </p>
      </div>

      {/* Item List Section */}
      <div className="items-list">
        {hospitalityItems.map((item) => (
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
            Experience <span>Hospitality</span>
          </p>
          <h2>Your Satisfaction is Our Priority</h2>
          <button>Contact Us</button>
          <button>Book Now</button>
        </div>
      </div>

      <div className="profile">
        <div className="profile-image">
          {/* Add image here */}
          <img src="/kennedy.png" alt="Profile" />
        </div>
        <div className="profile-content">
          <h1>Motivation</h1>
          <h2>John F. Kennedy </h2>
          <p>
            At Luxe, we believe in delivering an experience, not just a service.
            Our founder, Emily Carter, has redefined the standards of
            hospitality with her vision of personalized luxury.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
