import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { data } from './data';
import Card from './Components/Cards';
import './style.css';

export default function App() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setApiData(data.slice(0, 5))); // جلب أول 5 عناصر فقط
  }, []);

  const dataShow = data.map((el, index) => (
    <Card
      key={index}
      img={el.img}
      title={el.title}
      desc={el.desc}
      review={el.review}
      price={el.price}
    />
  ));

  return (
    <Router>
      <nav className="navbar">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/rooms">Rooms</Link>
        </button>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="form-container">
              <form className="form">
                <label htmlFor="1">First Name</label>
                <input
                  id="1"
                  type="text"
                  placeholder="First Name"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="2">Last Name</label>
                <input
                  id="2"
                  type="text"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="3">Email</label>
                <input
                  id="3"
                  type="email"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">Submit</button>
              </form>
            </div>
          }
        />
        <Route
          path="/rooms"
          element={
            <div className="rooms-container">
              <div className="cards-wrapper">{dataShow}</div>
              <div className="api-container">
                <h2>API Data:</h2>
                {apiData.map((item) => (
                  <div key={item.id} className="api-card">
                    <h3>{item.title}</h3>
                    <p>{item.body.substring(0, 100)}...</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
