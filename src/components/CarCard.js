import React from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={car.name} />
      </div>
      <div className="car-details">
        <h3>{car.name}</h3>
        <p>Seats: {car.seats}</p>
        <p>Mileage per Litre: {car.mileage} km/l</p>
        <p>Transmission: {car.transmission}</p>
        <p>Price per Month: ${car.pricePerMonth}</p>
        <button className="rent-button">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
