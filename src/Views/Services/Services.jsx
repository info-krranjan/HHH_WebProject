import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  const services = [
    { name: "Plumbing", price: "$50", img: "https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721533.jpg?t=st=1743272491~exp=1743276091~hmac=a04b9361ee7996f6023b1a114bce7d5a974391e86e61e71027eb44c9c52e9605&w=1380" },
    { name: "Electricians", price: "$40", img: "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15085.jpg?t=st=1743272647~exp=1743276247~hmac=333afcaa533d2a3d6b58f469687c87f50090f282c004a0e4fc64be889b191a12&w=1380" },
    { name: "Home Cleaning", price: "$30", img: "https://img.freepik.com/free-photo/professional-cleaning-service-person-using-vacuum-cleaner-office_23-2150520631.jpg?t=st=1743272688~exp=1743276288~hmac=eb801d6f684b64f6ad9e3f21e946d348f98ea946a26571f8b298cf0240d28b5b&w=1380" },
    { name: "Carpentry", price: "$60", img: "https://img.freepik.com/free-vector/warehouse-outside-concept-illustration_114360-17992.jpg?t=st=1743272731~exp=1743276331~hmac=bed38623f4003918577e308ee9193ff04aae32166af9cb0fadda4dd7479e0f71&w=1380" },
    { name: "BabySitter", price: "$60", img: "https://img.freepik.com/free-photo/pretty-sister-spending-time-with-her-baby-brother-sitting-floor-bedroom-beautiful-young-babysitter-playing-with-little-boy-indoors-holding-stuffed-toy-duck-infancy-childcare-motherhood_344912-7.jpg?t=st=1743274711~exp=1743278311~hmac=fe06deb966723506693aaf6021f121abc5c80c1347bee562709a29e4203afea3&w=1380" },
    { name: "Gardner", price: "$60", img: "https://img.freepik.com/free-photo/woman-gardner-greenhouse_1303-14065.jpg?t=st=1743274748~exp=1743278348~hmac=5cafcd5e24048ad17666203639f3319ddca2d4643e4cf92e1a34a9b9def01788&w=1380" },
    { name: "Barber", price: "$60", img: "https://img.freepik.com/free-photo/portrait-smiling-owner-hairdresser-salon_329181-1953.jpg?t=st=1743274807~exp=1743278407~hmac=882bd10803ac8ef2ebf6b2e1f6a0c00bf21152ef0d44ccc1046fb410df5a0ee8&w=1380" }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Our Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card shadow-lg text-center p-3">
              <img src={service.img} alt={service.name} className="img-fluid rounded mb-3" style={{ height: '150px', objectFit: 'cover' }} />
              <h5>{service.name}</h5>
              <p className="text-muted">Starting at {service.price}</p>
              <button className="btn btn-primary btn-sm">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
