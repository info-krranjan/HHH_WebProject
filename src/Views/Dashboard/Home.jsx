import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary-black mb-4">Home Help Hub</h1>
        
        {/* About Company Section */}
        <section className="mb-5 text-center">
          <img src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg?t=st=1743272256~exp=1743275856~hmac=c2ed320422229f88ccd2b8c6692f1228dc5b9a795b413aeaba2be5d9c8d06df6&w=1380" alt="About Us" className="img-fluid rounded mb-3" style={{ maxWidth: '400px', height: 'auto' }} />
          <h2 className="h4 text-dark">About Us</h2>
          <p className="text-muted">
            Help Home Hub (HHH) is your one-stop solution for booking reliable home services.
            From plumbing to electrical work, we connect you with trusted professionals to
            make your life easier.
          </p>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="mb-5 text-center">
          <h2 className="h4 text-dark">Why Choose Us?</h2>
          <img src="https://img.freepik.com/free-photo/two-business-men-celebrating-deal_158595-5256.jpg?t=st=1743272440~exp=1743276040~hmac=054726379c171e6ad86b68b5d9d919bdca165e724594249dbcaaed4cd737c4d3&w=1380" alt="Why Choose Us" className="img-fluid rounded mb-3" style={{ maxWidth: '400px', height: 'auto' }}/>
          <ul className="list-group list-group-flush mx-auto w-75 text-start">
            <li className="list-group-item">✔ Verified and experienced service professionals</li>
            <li className="list-group-item">✔ Affordable and transparent pricing</li>
            <li className="list-group-item">✔ Fast and hassle-free booking process</li>
            <li className="list-group-item">✔ 24/7 customer support</li>
          </ul>
        </section>
        
        {/* Services Offered Section */}
        <section className="text-center">
          <h2 className="h4 text-dark">Services We Offer</h2>
          <div className="row g-3 mt-3">
            <div className="col-md-3 col-sm-6">
              <div className="card p-3 text-center">
                <img src="https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721533.jpg?t=st=1743272491~exp=1743276091~hmac=a04b9361ee7996f6023b1a114bce7d5a974391e86e61e71027eb44c9c52e9605&w=1380" alt="Plumbing" className="mx-auto mb-2 img-fluid rounded" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
                <h5>Plumbing</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card p-3 text-center">
                <img src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15085.jpg?t=st=1743272647~exp=1743276247~hmac=333afcaa533d2a3d6b58f469687c87f50090f282c004a0e4fc64be889b191a12&w=1380" alt="Electricians" className="mx-auto mb-2 img-fluid rounded" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
                <h5>Electricians</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card p-3 text-center">
                <img src="https://img.freepik.com/free-photo/professional-cleaning-service-person-using-vacuum-cleaner-office_23-2150520631.jpg?t=st=1743272688~exp=1743276288~hmac=eb801d6f684b64f6ad9e3f21e946d348f98ea946a26571f8b298cf0240d28b5b&w=1380" alt="Home Cleaning" className="mx-auto mb-2 img-fluid rounded" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
                <h5>Home Cleaning</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card p-3 text-center">
                <img src="https://img.freepik.com/free-vector/warehouse-outside-concept-illustration_114360-17992.jpg?t=st=1743272731~exp=1743276331~hmac=bed38623f4003918577e308ee9193ff04aae32166af9cb0fadda4dd7479e0f71&w=1380" alt="Carpentry" className="mx-auto mb-2 img-fluid rounded" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
                <h5>Carpentry</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
