import React, { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    profilePic:
      "https://img.freepik.com/free-photo/portrait-young-woman-with-magnificent-smile-standing-with-arms-folded-isolated-white_171337-1184.jpg?t=st=1743275116~exp=1743278716~hmac=995a095cea721294cda91c6c623c92d19d13dab5bd4017a96f9821f59c608bbe&w=1380",
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    setUser(updatedUser);
    setEditMode(false);
  };

  return (
    <div className="container py-5 mb-3">
      <div className="card p-4 shadow-lg">
        <div className="d-flex align-items-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="rounded-circle me-3 border"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <h3 className="text-primary">{user.name}</h3>
        </div>
        <hr />
        {editMode ? (
          <div>
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Phone"
            />
            <input
              type="text"
              name="address"
              value={updatedUser.address}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Address"
            />
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <button className="btn btn-primary mb-3" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </div>
        )}
        <hr />
        {/* Additional Buttons with Google Icons */}
        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary">
            <i className="material-icons me-2">account_balance_wallet</i> Payments
          </button>
          <button className="btn btn-outline-secondary">
            <i className="material-icons me-2">local_offer</i> Your Promos
          </button>
          <button className="btn btn-outline-secondary">
            <i className="material-icons me-2">support_agent</i> Customer Support
          </button>
          <button className="btn btn-outline-secondary">
            <i className="material-icons me-2">settings</i> Settings
          </button>
          <button className="btn btn-outline-secondary">
            <i className="material-icons me-2">feedback</i> Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
