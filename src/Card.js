import React from 'react';
function Card() {
    return (
      <div className="row">
      <div className="col">
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header text-center"><b>Card 01</b></div>
          <div className="card-body text-center"> {/* Added text-center class here */}
            <p className="card-text" style={{ fontSize: '0.9rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header text-center"><b>Card 02</b></div>
          <div className="card-body text-center"> {/* Added text-center class here */}
            <p className="card-text" style={{ fontSize: '0.9rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header text-center"><b>Card 03</b></div>
          <div className="card-body text-center"> {/* Added text-center class here */}
            <p className="card-text" style={{ fontSize: '0.9rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>

    );
}
export default Card;