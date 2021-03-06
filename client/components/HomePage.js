import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

import '../styles/homepage.css';

const HomePage = () => (
  <div className='home-page'>
    <Hero />
    <h2>Collect and Trade Books with Other Users!</h2>
    <p>
      Welcome to the club! This app allows you to trade books with other users. You must 
      first <Link to='/signup'>sign up</Link> and <Link to='/login'>log in</Link> before 
      you can add books to your collection and request trades. You can accept or reject trades
      requested from other users.
    </p>
    <p>
      This full stack application was written in node/express on the backend and utilizes a MongoDB
      for data storage. The front end was created with ReactJS. Check out the source code at this
      project's <a target='_blank' href='https://github.com/libeja/book-trading-club'>GitHub&nbsp;Page</a>.
    </p>
  </div>
);

export default HomePage;
