import React, { useState } from "react";
const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setdata((previousValue) => {
      return { ...previousValue, [name]: value };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thankyou ${data.fullname} for your kind response.\n Have a nice Day`
    );
  };
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-headding">Contact Us</h1>
        <div className="contact-form-container">
          <div className="form">
            <form onSubmit={formSubmit}>
              <div className="form-container">
                <div className="form-element">
                  <lable className="form-lable">FullName</lable>
                  <input
                    type="text"
                    className="form-input"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Full Name *"
                    required
                  />
                </div>
                <div className="form-element">
                  <lable className="form-lable">Phone</lable>
                  <input
                    type="text"
                    className="form-input"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Moblie Number *"
                    required
                  />
                </div>
                <div className="form-element">
                  <lable className="form-lable">Email address</lable>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="Email address *"
                    required
                  />
                </div>
                <div className="form-element">
                  <lable className="form-lable">Message</lable>
                  <textarea
                    className="form-textArea"
                    rows="3"
                    name="message"
                    value={data.message}
                    onChange={inputEvent}
                    required
                  />
                </div>
              </div>
              <input type="submit" className="btnSend" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
