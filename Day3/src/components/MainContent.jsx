import service from "../assets/service.jpg";
import { useState } from "react";

const MainContent = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="main-content">
      <img src={service} alt="Image" width="600px" height="600px" />
      <div className="form-container">
        <h2 className="text-center bold">Provide Your Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <i className="fas fa-user"></i> Name:
          </label>
          <input
            className="height"
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="mobile">
            <i className="fas fa-mobile-alt"></i> Mobile Number:
          </label>
          <input
            className="height"
            type="tel"
            id="mobile"
            name="mobile"
            pattern="[0-9]+"
            required
            title="Please enter a valid mobile number (only numbers are allowed)"
          />

          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email Address:
          </label>
          <input
            className="height"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">
            <i className="fas fa-comment"></i> Message:
          </label>
          <textarea id="message" name="message" required></textarea>

          <input className="button" type="submit" value="Submit" />
        </form>
        {showMessage && (
          <p className="message">Don't Check your inbox. Just for Testing</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
