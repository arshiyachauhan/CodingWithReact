// Implement a simple React application for a wrestling contest page. Display the contest name.
// Include a button that triggers an alert when clicked Use the map function to iterate over a list of wrestlers and render them in an unordered list (ul). 
// Use Bootstrap's grid system to display the list of wrestlers on the left and an image on the right. Use PropTypes to validate the props.
//  The contest name and list of wrestlers should be passed as props from the parent component

import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const WrestlingContest = ({ contestName, wrestlers, wrestlerImages }) => {
  const handleWrestlerClick = (wrestler) => {
    alert(`${wrestler} is ready for the contest!`);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">{contestName}</h1>
      <button
        className="btn btn-primary mb-4"
        onClick={() => alert('Contest Started!')}
      >
        Start Contest
      </button>
      <div className="row">
        <div className="col-md-6">
          <h2>Wrestlers</h2>
          <ul className="list-group">
            {wrestlers.map((wrestler, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {wrestler}
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleWrestlerClick(wrestler)}
                >
                  Details
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Wrestler Image</h2>
          {wrestlerImages?.length ? (
            <div className="d-flex flex-wrap">
              {wrestlerImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Wrestler ${index + 1}`}
                  className="img-fluid m-2"
                  style={{ maxWidth: '100px', height: 'auto' }}
                />
              ))}
            </div>
          ) : (
            <img
              src="https://via.placeholder.com/150"
              alt="Wrestler"
              className="img-fluid"
            />
          )}
        </div>
      </div>
    </div>
  );
};

WrestlingContest.propTypes = {
  contestName: PropTypes.string.isRequired,
  wrestlers: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrestlerImages: PropTypes.arrayOf(PropTypes.string),
};

WrestlingContest.defaultProps = {
  wrestlerImages: [],
};

export default WrestlingContest;
