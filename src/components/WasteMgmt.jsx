import "../css/WasterMgmt.css";
import { Link } from "react-router-dom";

const WasterMgmt = () => {
  return (
    <div className="">
      <div id="homeBanner">
        <div className="container-fluid container-waste-1 position-relative">
          <div className="position-absolute bannerContent">
            <h1 className="text-light bghead">Waste Management</h1>
            <h4 className="text-light bgtext">
              Waste Management /
              <span className="text-info"> Solid Waste Management</span>
            </h4>
          </div>
        </div>
      </div>

      <section className="mt-5 container">
        <div id="textContent">
          <h3 className="text-info">Solid Waste Management</h3>
          <h1 className="fw-bold p-1 mt-4">Solid Waste Management</h1>
          <p className="text-justify custom-font-monospace fs-5">
            Solid waste encompasses various discarded materials from households,
            industries, and commercial activities. Its mismanagement poses
            significant challenges, including environmental degradation, health
            hazards, and resource depletion. UNISOL stands at the forefront of
            the battle against improper waste management, striving for a
            sustainable future. With collaborative efforts and innovative
            strategies, the organization demonstrates the significance of
            responsible waste handling.
          </p>
        </div>
      </section>

      <section className="container mt-5">
        <button className="fs-2 text-white btn btn-info bs-primary-bg-subtle rounded-1 p-2 shadow">
          BROUCHER
        </button>
        <div className="d-flex mt-5">
          <div className="overflow-x-auto">
            <div className="d-flex brochers mt-4">
              <div className="txtLinks">
                <Link
                  to=""
                  className="text-decoration-none fs-4 text-dark ms-4"
                >
                  Solid Waste Management
                </Link>
              </div>
              <div className="txtLinks">
                <Link
                  to=""
                  className="text-decoration-none fs-4 text-dark ms-4"
                >
                  Biomedical Waste Management
                </Link>
              </div>
              <div className="txtLinks">
                <Link
                  to=""
                  className="text-decoration-none fs-4 text-dark ms-4"
                >
                  Water Waste Management
                </Link>
              </div>
              <div className="txtLinks">
                <Link
                  to=""
                  className="text-decoration-none fs-4 text-dark ms-4"
                >
                  Water Waste Management
                </Link>
              </div>
              <div className="txtLinks">
                <Link
                  to=""
                  className="text-decoration-none fs-4 text-dark ms-4"
                >
                  Water Waste Management
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="imgPostion">
          <div className="ml-auto float-end mt-3 img mb-5">
            <img
              src="../../public/pattern1.png"
              alt="not available"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mt-5">
          <div className="row col-12">
            <div className="col-lg-8 order-lg-1 order-2 text-justify">
              <h1 className="text-info">Application</h1>
              <p className="fs-5">
                UNISOL, a frontrunner in the medical and surgical equipment
                industry, champions sustainable waste management.
              </p>
              <div className="contents">
                <h5>Solid Waste Generation</h5>
                <p className="fs-5">
                  The generation of solid waste is influenced by population
                  density, lifestyle, economic activities, and urbanization.
                  Waste includes organic, inorganic, recyclable, and hazardous
                  materials. Managing waste at its source through awareness and
                  reduction strategies is vital to curb excessive generation.
                </p>
              </div>
              <div className="contents">
                <h5>On-site Handling and Storage</h5>
                <p className="fs-5">
                  Proper handling and storage techniques are imperative to
                  prevent environmental contamination and health risks.
                  Segregation, composting, and containment of waste at its
                  origin help minimize adverse impacts on surroundings and
                  ecosystems.
                </p>
              </div>
              <div className="contents">
                <h5>Collection Methods</h5>
                <p className="fs-5">
                  Efficient waste collection systems vary based on locality and
                  waste types. Utilizing segregated bins, scheduled pickups, and
                  involving community participation aids in streamlining
                  collection processes. Addressing challenges like irregular
                  waste disposal and limited infrastructure is pivotal for
                  effective collection.
                </p>
              </div>
              <div className="contents">
                <h5>Transfer and Transport</h5>
                <p className="fs-5">
                  Moving waste from collection points to treatment facilities
                  demands effective transportation methods. Embracing
                  eco-friendly transport options, optimizing routes, and
                  investing in suitable vehicles minimize energy consumption and
                  environmental impact during transit.
                </p>
              </div>
              <div className="contents">
                <h5>Material and Resource Recovery</h5>
                <p className="fs-5">
                  Recovering materials through recycling, composting, and energy
                  recovery reduces the strain on natural resources. Innovative
                  technologies facilitate the extraction of valuable resources
                  from waste, promoting a circular economy and minimizing
                  landfill reliance.
                </p>
              </div>
              <div className="contents">
                <h5>Disposal Methods</h5>
                <p className="fs-5">
                  Disposal involves the final treatment and disposition of
                  residual waste. Landfills, incineration, and biological
                  treatment are among the prevalent disposal methods. However,
                  minimizing disposal by maximizing recycling and recovery
                  remains a primary goal for sustainable waste management.
                </p>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 order-1 d-flex justify-content-center p-4">
              <img
                src="../../public/solidwaste.png"
                alt="not available"
                className="img-fluid my-auto"
              />
            </div>
          </div>
          <div className="container mt-5">
            <div className="row text-center">
              <div className="col-12 col-sm-4 mb-4">
                <img
                  src="../../public/bucket1.png"
                  alt="Bucket 1"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-4 mb-4">
                <img
                  src="../../public/bucket2.png"
                  alt="Bucket 2"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-4 mb-4">
                <img
                  src="../../public/bucket3.png"
                  alt="Bucket 3"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <div id="map" className="bg-dark text-white p-4">
          <div className="row bg-cover">
            <div className="col d-flex justify-content-center align-items-center">
              <img
                src="../../public/map.png"
                alt="Map"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "500px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col mapText d-flex flex-column justify-content-center align-items-center">
              <p className="display-4">62</p>
              <p className="display-6">Million</p>
              <p className="h3">Tonnes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 container">
        <div id="textContent">
          <h1 className="fw-bold p-1 mt-4">From the Professional</h1>
          <p className="text-justify custom-font-monospace fs-5">
            Solid waste encompasses various discarded materials from households,
            industries, and commercial activities. Its mismanagement poses
            significant challenges, including environmental degradation, health
            hazards, and resource depletion. UNISOL stands at the forefront of
            the battle against improper waste management, striving for a
            sustainable future. With collaborative efforts and innovative
            strategies, the organization demonstrates the significance of
            responsible waste handling.
          </p>
        </div>
        <div className="textCard mt-5">
          <div className="row">
            <div className="col d-flex flex-column flex-md-row align-items-center p-2 border-2 shadow m-2">
              <img
                src="../../public/services.png"
                alt="Services"
                className="img-fluid me-3"
                style={{ width: "50px", height: "50px" }}
              />
              <p className="mb-0">
                UNISOL's diverse solutions in medical, dental, and physiotherapy
                practices are driven by innovation and efficiency.
              </p>
            </div>
            <div className="col d-flex flex-column flex-md-row align-items-center p-2 border-2 shadow m-2">
              <img
                src="../../public/services.png"
                alt="Focus"
                className="img-fluid me-3"
                style={{ width: "50px", height: "50px" }}
              />
              <p className="mb-0">
                With a global presence, UNISOL's reach extends to over 60
                countries, reinforcing its commitment to worldwide healthcare.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column flex-md-row align-items-center p-2 border-2 shadow m-2">
              <img
                src="../../public/services.png"
                alt="Quality"
                className="img-fluid me-3"
                style={{ width: "50px", height: "50px" }}
              />
              <p className="mb-0">
                Emphasizing quality and safety, UNISOL ensures the highest
                standards across its products and services.
              </p>
            </div>
            <div className="col d-flex flex-column flex-md-row align-items-center p-2 border-2 shadow m-2">
              <img
                src="../../public/services.png"
                alt="Reach"
                className="img-fluid me-3"
                style={{ width: "50px", height: "50px" }}
              />
              <p className="mb-0">
                UNISOL’s global network empowers it to adapt and innovate in
                response to evolving healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasterMgmt;
