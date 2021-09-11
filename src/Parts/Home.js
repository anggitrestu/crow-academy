import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ul>
        <li>
          <Link to={`/login`} className="btn btn-primary">
            <h3>Halaman Login</h3>
          </Link>
        </li>
        <li>
          <Link to={`/register`} className="btn btn-primary">
            <h3>Halaman Register</h3>
          </Link>
        </li>
        <li>
          <Link to={`/tutor`} className="btn btn-primary">
            <h3>Halaman Tutor</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
