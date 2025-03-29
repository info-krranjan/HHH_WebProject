import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Booking(){
  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Plumbing",
      date: "March 20, 2025",
      amount: "$50",
      rating: 4,
      feedback: "Great service, quick fix!",
    },
    {
      id: 2,
      service: "Electrician",
      date: "March 18, 2025",
      amount: "$70",
      rating: null,
      feedback: "",
    },
    {
      id: 3,
      service: "Home Cleaning",
      date: "March 15, 2025",
      amount: "$40",
      rating: 5,
      feedback: "Very thorough cleaning. Satisfied!",
    },
  ]);

  const handleRatingChange = (id, value) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, rating: value } : booking
      )
    );
  };

  const handleFeedbackChange = (id, value) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, feedback: value } : booking
      )
    );
  };

  const handleSubmit = (id) => {
    alert("Feedback submitted successfully!");
  };

  return (
    <div className="container py-4">
      <h2 className="text-center text-primary mb-4">Your Previous Bookings</h2>
      <div className="row">
        {bookings.map((booking) => (
          <div key={booking.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card p-3 shadow-sm">
              <h5 className="text-dark">{booking.service}</h5>
              <p className="text-muted">Date: {booking.date}</p>
              <p className="text-success">Amount Paid: {booking.amount}</p>

              {booking.rating !== null ? (
                <>
                  <p className="mb-1">Rating: {"⭐".repeat(booking.rating)}</p>
                  <p className="text-muted">Feedback: {booking.feedback}</p>
                </>
              ) : (
                <>
                  <label>Rate this service:</label>
                  <select
                    className="form-select mb-2"
                    value={booking.rating || ""}
                    onChange={(e) =>
                      handleRatingChange(booking.id, Number(e.target.value))
                    }
                  >
                    <option value="">Select Rating</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} Stars
                      </option>
                    ))}
                  </select>
                  <textarea
                    className="form-control mb-2"
                    placeholder="Write your feedback..."
                    value={booking.feedback}
                    onChange={(e) =>
                      handleFeedbackChange(booking.id, e.target.value)
                    }
                  />
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSubmit(booking.id)}
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
