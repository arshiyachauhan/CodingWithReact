import React, { useState } from "react";

const DonationForm = () => {
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!donorName.trim()) {
      setError("Donor name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (!donationAmount || isNaN(donationAmount) || Number(donationAmount) <= 0) {
      setError("Donation amount must be a valid number greater than 0.");
      return;
    }

    setDonations([
      ...donations,
      { donorName, email, donationAmount: Number(donationAmount) },
    ]);

    setDonorName("");
    setEmail("");
    setDonationAmount("");
    setError("");
  };

  return (
    <div>
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Donor Name: </label>
          <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)}/>
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Donation Amount: </label>
          <input
            type="number" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)}/>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
