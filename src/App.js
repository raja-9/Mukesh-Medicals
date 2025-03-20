import React from "react";
import "./App.css";

function App() {
  const handleCall = () => {
    alert("Contact us at 04425900604 or 8072275245");
  };

  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>Mukesh Medicals</h1>
        <p>Your Trusted Pharmacy</p>
      </header>

      {/* Banner */}
      <div className="banner">
        <img src="/pharmacy.jpg" alt="Mukesh Medicals" />
      </div>

      {/* About Section */}
      <section className="about">
        <h2>Welcome to Mukesh Medicals</h2>
        <p>
          We at Mukesh Medicals believe in providing <strong>quality healthcare services</strong>. We ensure all medicines are dispensed <strong>only with a doctor's prescription</strong>.
        </p>
        <p>We offer <strong>home delivery</strong> for cosmetics and other products.</p>
      </section>

      {/* Timings Section */}
      <section className="timings">
        <h2>🕒 Store Timings:</h2>
        <p><strong>Morning:</strong> 9:00 AM - 1:30 PM</p>
        <p><strong>Evening:</strong> 4:00 PM - 11:00 PM</p>
      </section>

      {/* Motto Section */}
      <section className="motto">
        <h2>💊 Our Motto:</h2>
        <p>Best Quality, Great Service, Affordable Price!</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>📞 Contact Us:</h2>
        <p>04425900604, 8072275245</p>
        <button onClick={handleCall}>📞 Call Us Now</button>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2025 Mukesh Medicals | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
