import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <img
            src="img/banner/home-banner.png"
            alt="doctor img"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="container mt-lg-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="card bg-dark text-light mx-4"
                style={{ backgroundColor: "#343a40" }}
              >
                <img
                  src="assets/img/doctor.png"
                  className="card-img-top doctorimg bg-light"
                  alt="doctor img"
                  style={{ height: "17rem", backgroundColor: "#f8f9fa" }}
                />
                <h5 className="card-title p-1">Vikram Khulsange</h5>
                <h6 className="card-subtitle mb-2 text-muted p-1">Director</h6>
                <div className="card-body">
                  <p className="card-text">
                    Vikram Khulsange is the Founder and Director at SurgiSol
                    Healthcare Solutions Pvt Ltd and is instrumental in the
                    genesis evolution of the organization. He has rich
                    experience in Telecom, Advertising Healthcare business. With
                    over 22 years of exposure to the healthcare business, he
                    enjoys goodwill and trust of some of the biggest KOLs and is
                    well resourced with insights into Medical Diagnostic,
                    Surgical devices Pharmaceuticals business.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4>About Us</h4>
              <h1>Delivering Products to the Healing Hands</h1>
              <p style={{ fontSize: "20px" }}>
                At the heart of our mission lies the commitment to deliver
                essential products to the healing hands that tirelessly work
                towards the well-being of others. Whether it's medical supplies,
                therapeutic tools, or wellness essentials, our goal is to ensure
                these vital items reach the dedicated professionals and
                caregivers who make a profound difference in people's lives. We
                understand the significance of timely, reliable deliveries in
                supporting those on the front lines of healthcare and wellness.
                With precision and care, we strive to facilitate seamless
                distribution, enabling practitioners to focus on what truly
                matters - delivering compassionate care and aiding in the
                process of healing.
              </p>
              <a
                className="btn btn-primary more mt-lg-4"
                href="#"
                role="button"
              >
                More
              </a>
            </div>
          </div>
        </div>

        {/* Video Carousel */}
        <div className="container mt-5">
          <div
            id="videoCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      allowFullScreen
                      title="Video 1"
                    ></iframe>
                  </div>
                  <div className="col">
                    <iframe
                      src="https://www.youtube.com/embed/ScMzIvxBSi4"
                      allowFullScreen
                      title="Video 2"
                    ></iframe>
                  </div>
                  <div className="col">
                    <iframe
                      src="https://www.youtube.com/embed/9bZkp7q19f0"
                      allowFullScreen
                      title="Video 3"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className="container-fluid box2 mt-lg-5 mt-md-3"
          style={{
            backgroundImage: "url('assets/img/hBackgroud.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "100%",
          }}
        >
          <h1>hello</h1>
        </div>

        {/* Testimonial Carousel */}
        <div id="testimonialCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h3 className="testimonials p-3">Testimonials</h3>
              <img
                src="assets/img/testimonial/redman.png"
                style={{ height: "120px", width: "120px" }}
                alt="Testimonial Image"
              />
              <p>
                I've been in the healthcare field for years, and finding a
                partner like UNISOL has been a game-changer. Their commitment to
                innovation and quality aligns perfectly with our mission of
                providing exceptional patient care. What sets UNISOL apart is
                their deep understanding of the healthcare sector; they aren't
                just suppliers, they're collaborators dedicated to improving
                lives.
              </p>
              <h5>Cameron Williamson</h5>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Box 3 */}
        <div
          className="box3"
          style={{
            backgroundImage: "url('assets/img/stethoscope.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "100%",
          }}
        >
          <div className="subbox3">
            <h5>Let's Try! to Support</h5>
            <h1>Be Ready for the Ever-Changing World.</h1>
            <button type="button" className="btn btn-info">
              Info
            </button>
            <button type="button" className="btn btn-outline-info">
              Info
            </button>
          </div>
        </div>

        {/* box 4 */}
        <div class="py-5 text-center text-decoration-underline">
          <h4> Our Indusdry</h4>
        </div>

        <div
          id="imageSlider"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#imageSlider"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#imageSlider"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#imageSlider"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#imageSlider"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item box4 active"
              style={{
                backgroundImage: "url('assets/img/box4bgDoctor.jpg')",
                backgroundSize: "100rem",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="subbox4">
                <h5 className="text-light">Healthcare</h5>
                <p className="text text-light">
                  At UNISOL, we believe that collaboration drives progress. We
                  invite you to join hands with us in shaping the future of
                  healthcare. Together, let's create a healthier tomorrow where
                  innovation and compassion intersect for the betterment of
                  humanity. Thank you for choosing UNISOL - Where Precision
                  Meets Care. For inquiries, collaborations, or to explore our
                  range of cutting-edge solutions, reach out to us through the
                  provided contact information.
                </p>
                <a
                  aria-disabled="true"
                  className="btn btn-primary btn-lg"
                  href="/healthcare"
                  role="button"
                  tabIndex="-1"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#imageSlider"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#imageSlider"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container mt-lg-5">
          <div className="row d-flex">
            <div
              className="card mb-3 border-top border-end me-lg-4 pt-3"
              style={{ width: "18rem" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="assets/img/industry/services.png"
                    className="img-fluid rounded-start"
                    alt="Services"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">3,254 +</h5>
                    <p className="card-text">Services</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card mb-3 border-top border-end me-lg-4 pt-3"
              style={{ width: "18rem" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="assets/img/industry/clients.png"
                    className="img-fluid rounded-start"
                    alt="Clients"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">4,865 +</h5>
                    <p className="card-text">Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card mb-3 border-top border-end me-lg-4 pt-3"
              style={{ width: "18rem" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="assets/img/industry/project.png"
                    className="img-fluid rounded-start"
                    alt="Projects"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">2,654+</h5>
                    <p className="card-text">Projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card mb-3 border-top border-end me-lg-4 pt-3"
              style={{ width: "18rem" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="assets/img/industry/expert.png"
                    className="img-fluid rounded-start"
                    alt="Expert Team"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">100 +</h5>
                    <p className="card-text">Expert Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="container-fluid cntbox">
          <div className="row d-lg-flex">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-5 text-light">
              <div style={{ backgroundColor: "aliceblue", width: "87px" }}>
                <img
                  src="img/logo/unisol-logo.png"
                  alt="Unisol Logo"
                  style={{ height: "40px" }}
                />
              </div>
              <h1>Contact Us</h1>
              <p>
                Call us Directly: <b>+91 987 456 3210</b>
              </p>
              <p>
                Contact Email: <b>surgisol@gmail.com</b>
              </p>
              <div className="mb-3">
                <form className="w-lg-100">
                  {/* Name input */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form4Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form4Example1">
                      Name
                    </label>
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form4Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form4Example2">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form4Example3"
                      rows="4"
                    ></textarea>
                    <label className="form-label" htmlFor="form4Example3">
                      Message
                    </label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="button"
                    className="btn btn-primary contbtn mb-4"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-5">
              <img
                src="./contact-us.png"
                alt=""
                style={{ height: "90%", width: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
