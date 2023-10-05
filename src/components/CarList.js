import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CarCard from './CarCard';
import Pagination from './Pagination';
import './CarList.css'; // Import the CSS file

const CarList = ({ cars }) => {
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(pageNumber ? parseInt(pageNumber, 10) : 1);
  const [searchTerm, setSearchTerm] = useState('');
  const carsPerPage = 6;
  const navigate = useNavigate();

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/page/${pageNumber}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (pageNumber) {
      setCurrentPage(parseInt(pageNumber, 10));
    } else {
      setCurrentPage(1);
    }
  }, [pageNumber]);

  return (
    <div className="car-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by car name..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="car-list">
      {currentCars.map((car) => (
    <CarCard key={car.id} car={car} />
  ))}
      </div>
      <Pagination
        currentPage={currentPage}
        carsPerPage={carsPerPage}
        totalCars={filteredCars.length}
        onPageChange={handlePageChange}
        className="pagination" 
      />
    </div>
  );
};

export default CarList;
