import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const MovieCard = ({ movie }) => {
const [showModal, setShowModal] = useState(false);
const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card bg-dark text-white" style={{ height: '100%' }}>
        <img
          className="card-img-top"
          src={movie.poster}
          alt={movie.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body" style={{ height: '40%' }}>
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
          <p className="card-text">
            <small>{movie.year}</small>
          </p>
          <Button variant="primary" onClick={handleModalOpen}>
            Trailer 
          </Button>
        </div>
       
      </div>

      <Modal show={showModal} onHide={()=>setShowModal(false)} centered>
        <Modal.Body>
          <video className="w-100" controls>
            <source src={movie.files[0]} type="video/mp4" />
          </video>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieCard;
