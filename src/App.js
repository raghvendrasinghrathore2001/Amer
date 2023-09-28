import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
  };
  return (
    <div className="app">
      <div>
        <h2 className='hello'>Welcom to Amer Frot</h2>
        <form className='thirdsection' onSubmit={handleSubmit}>
          <div >
            <label>Name:</label>
            <input className='input'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Date:</label>
            <input className='date'
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>Time:</label>
            <input className='time'
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button  className='button' type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default App;
