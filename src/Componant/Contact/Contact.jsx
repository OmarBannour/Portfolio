import React from "react";
import "./Contact.css";
import img from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import phone from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a8254d76-9262-47c5-87bd-8e0f2e2d2350");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Email send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title">
        <h1>Get in touch</h1>
        <img src={img} alt="" />
      </div>
      <div className="talk">
        <div className="left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects,also i am looking
            for intership , so feel free to send me a message about anything
            that you want me to work on. You can contact anytime.
          </p>
          <div className="details">
            <div className="detail">
              <img src={mail} alt="" /> <p>bannouromar54@gmail.com</p>
            </div>
            <div className="detail">
              <img src={phone} alt="" />
              <p>+21651920204</p>
            </div>
            <div className="detail">
              <img src={location} alt="" /> <p>Tunisie,Monastir</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="messgae"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn3">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
