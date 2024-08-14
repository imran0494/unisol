import React from "react";

const Inspiration = () => {
  return (
    <>
      <div className="container-fluid container-our-1"></div>
      <div className="container justify-content-center text-center my-4">
        <h5 className="text-primary font-bold">Meet Our Inspiration</h5>
        <h2 className="text-3xl font-bold">Our Inspiration</h2>
        <p className="text-gray-600 text-center">
          Rooted in passion and dedication, Unisol finds inspiration in
          elevating medical advancements for transformative surgical solutions
          and patient care.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2 col-lg-2 col-sm-12">
            <img
              src="./integrity-pic.png"
              alt="Integrity"
              width="180"
              height="170"
            />
          </div>
          <div className="col-md-10 col-lg-10 col-sm-12 pt-3">
            <h2 className="font-bold">Integrity</h2>
            <h5 className="font-semibold">Michelle Obama</h5>
            <p className="mt-3">
              ‘We learned about honesty and integrity—that the truth matters...
              that you don't take shortcuts or play by your own set of rules...
              and success doesn't count unless you earn it fair and square.’
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-2 col-lg-2 col-sm-12">
            <img
              src="assets/img/inspiration/kalam.png"
              alt="Goal"
              width="180"
              height="170"
            />
          </div>
          <div className="col-md-10 col-lg-10 col-sm-12 pt-3">
            <h2 className="font-bold">Goal</h2>
            <h5 className="font-semibold">Dr. A. P. J. Abdul Kalam</h5>
            <p className="mt-3">
              ‘To succeed in your mission, you must have single-minded devotion
              to your goal’
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-2 col-lg-2 col-sm-12">
            <img
              src="assets/img/inspiration/ellen.png"
              alt="Focus"
              width="180"
              height="170"
            />
          </div>
          <div className="col-md-10 col-lg-10 col-sm-12 pt-3">
            <h2 className="font-bold">Focus</h2>
            <h5 className="font-semibold">Ellen DeGeneres</h5>
            <p className="mt-3">
              ‘Sometimes you can't see yourself clearly until you see yourself
              through the eyes of others.’
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-2 col-lg-2 col-sm-12">
            <img
              src="assets/img/inspiration/kennedy.png"
              alt="Motivation"
              width="180"
              height="170"
            />
          </div>
          <div className="col-md-10 col-lg-10 col-sm-12 pt-3">
            <h2 className="font-bold">Motivation</h2>
            <h5 className="font-semibold">John F. Kennedy</h5>
            <p className="mt-3">
              ‘Things do not happen. Things are made to happen.’
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-2 col-lg-2 col-sm-12">
            <img
              src="assets/img/inspiration/truett.png"
              alt="People"
              width="180"
              height="170"
            />
          </div>
          <div className="col-md-10 col-lg-10 col-sm-12 pt-3">
            <h2 className="font-bold">People</h2>
            <h5 className="font-semibold">S. Truett Cathy</h5>
            <p className="mt-3">
              ‘Putting people before profits is how we’ve tried to operate from
              the beginning.’
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inspiration;
