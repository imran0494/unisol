import React from "react";
import "./healthcare.css";

function Healthcare() {
    return (
        <>
            <div>
                {/* -------------------------First Section------------------------- */}
            <section id="background">
                <div id="shade" className="position-relative">
                    <div className="container">
                        <div className="position-absolute top-50 start-0 translate-middle-y">
                            <div className="fw-bold text-white ms-5" id="head1">
                                HealthCare
                            </div>
                            <div id="head2" className="ms-5">
                                <span className="text-white">HealthCare/</span>
                                <span className="text-primary">Visualization System</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------Surgisol section--------------------------------- */}

            <section>
                <div id="second-section">
                    <div className="text-center fs-1 fw-bold text-dark">Surgisol</div>
                    <p className="fs-4 text-dark">
                        Welcome to SurgiSol Healthcare Solutions Pvt Ltd, your premier
                        destination for cutting-edge med-tech solutions in India and beyond.
                        Established in June 2017, SurgiSol stands as a beacon of excellence,
                        specializing in the distribution of top-tier medical devices,
                        instruments, implants, and consumables from renowned global
                        manufacturers. At SurgiSol, our core focus extends beyond mere
                        distribution. We specialize in fostering partnerships and
                        facilitating connections for a diverse range of healthcare projects.
                        From liaising on government tenders to overseeing turnkey projects
                        and nurturing public-private partnerships, SurgiSol thrives on being
                        the conduit for groundbreaking healthcare solutions. Join us at
                        SurgiSol Healthcare Solutions Pvt Ltd as we continue to redefine
                        healthcare solutions and shape the future of the medical landscape,
                        one innovation at a time.
                    </p>
                </div>
            </section>

            {/* ---------------------------------HealthCare section--------------------------------- */}
            <section>
                <div className="mt-5">
                    <div className="text-center text-primary fs-1">HealthCare</div>
                    <div className="text-center fs-2">Medical Equipment's</div>
                    <p className="text-secondary text-center fs-4">
                        Discover Unrivaled Medical Innovations at UNISOL - Elevating Surgical
                        Precision and Patient Care with Cutting-Edge Technologies.
                    </p>
                </div>
            </section>

            {/* ---------------------------------Smart SurgN section--------------------------------- */}

            <section>
                <div className="row py-5">
                    <div className="col-md-6 mb-md-0">
                        <img src="../../public/smartsurgn.png" alt="Smart SurgN" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="text-center fs-2 fw-bold">Smart SurgN</div>
                        <p className="text-secondary text-center fs-4">
                            The Smart SurgN machine is an innovative medical device designed
                            to revolutionize surgical procedures through advanced technology
                            and intelligent automation. This cutting-edge system integrates
                            artificial intelligence (AI), robotics, and high-precision
                            surgical tools to enhance the accuracy, efficiency, and safety of
                            various surgical interventions. At its core, the Smart SurgN
                            machine utilizes sophisticated AI algorithms to analyze vast
                            amounts of medical data, including patient information, imaging
                            scans, and surgical protocols. This AI-driven analysis assists
                            surgeons by providing real-time guidance, predictive insights, and
                            personalized recommendations during procedures{" "}
                            <a href="#" className="text-decoration-none">
                                read more...
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------------------------------Info & Callme section--------------------------------- */}
            
            <section>
                <div id="diagnosis-section" className="position-relative mt-5">
                    <div className="position-absolute top-50 start-0 translate-middle-y">
                        <div className="fs-3 px-3 px-md-5 text-dark">Let's Try! to Support</div>
                        <p className="fs-2 px-3 px-md-5 text-dark">Be Ready for the Ever-Changing World.</p>
                        <div className="mx-3 mx-md-5">
                            <button className="btn btn-info w-25 w-md-25 me-2">Info</button>
                            <button className="btn btn-info w-25 w-md-25">Call</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------Contact Us-------------------------- */}
            <section>
                <div className="row p-3 p-md-5" id='contactus-section'>
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="border border-1 border-secondary rounded p-3">
                            <div className="py-2 px-4">
                                <div className="fs-2 fw-bold text-center text-white">Contact Us</div>
                                <div className="text-white">Call us Directly : +91 9874563210</div>
                                <div className="text-white">Email us to : surgisol@gmail.com</div>
                            </div>
                            <form className="px-2 px-md-4">
                                <input type="text" name="Name" placeholder="Your name" className="form-control mb-2"/>
                                <input type="text" name="Email" placeholder="Email" className="form-control mb-2"/>
                                <textarea name="Message" placeholder="Message" className="form-control mb-2"></textarea>
                                <button className="btn btn-primary mt-2">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <img src="../../public/contact-us.png" alt="Contact Us" className="img-fluid rounded"/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-2">
                    <div className="d-flex flex-column flex-md-row align-items-center">
                        <div>
                            <img src="../../public/JamesRouse.png" alt="James Rouse" className="rounded-3 img-fluid" width={200}/>
                        </div>
                        <div className="px-3 px-md-4 text-center text-md-start">
                            <div className="fs-2">James Rouse</div>
                            <p>‘’Profit is not legitimate purpose of business, the legitimate purpose of business is to provide a product or service that people need and do it so well that’s it’s profitable.’’</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    );
}

export default Healthcare;
