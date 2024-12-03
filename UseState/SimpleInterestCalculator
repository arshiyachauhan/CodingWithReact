import React, { useState } from "react";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [calculations, setCalculations] = useState([]);

  const calculateInterest = (e) => {
    e.preventDefault();
    if (principal && rate && time) {
      const interest = (principal * rate * time) / 100;
      setCalculations([
        ...calculations,
        { principal, rate, time, interest: interest.toFixed(2) },
      ]);
      setPrincipal("");
      setRate("");
      setTime("");
    } else {
      alert("Please fill in all fields!");
    }
  };

  const clearHistory = () => {
    setCalculations([]);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Simple Interest Calculator</h2>
      <form onSubmit={calculateInterest}>
        <div>
          <label>Principal:</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="Enter principal"/>
        </div>
        <div>
          <label>Rate (%):</label>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Enter rate"/>
        </div>
        <div>
          <label>Time (years):</label>
          <input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Enter time"/>
        </div>
        <button type="submit">Calculate</button>
      </form>
      <button onClick={clearHistory} >
        Clear History
      </button>
      <div>
        <h3>Calculation History</h3>
        {calculations.length > 0 ? (
          <ul>
            {calculations.map((calc, index) => (
              <li key={index}>
                Principal: {calc.principal}, Rate: {calc.rate}%, Time:{" "}
                {calc.time} years, Interest: ₹{calc.interest}
              </li>
            ))}
          </ul>
        ) : (
          <p>No calculations yet.</p>
        )}
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
