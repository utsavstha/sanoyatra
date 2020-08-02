import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Card from './components/Card';
import mustang from './assets/mustang.jpg'
import Offer from './components/Offer';


function App() {
  const [destination, setDestination] = useState([{
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }, {
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }, {
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }, {
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }, {
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }, {
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }, {
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }, {
    "title": "Mustang",
    "duration": "3 days",
    "type": "TREKKING",
    "rating": "5",
    "views": "100",
    "image": { mustang }
  }]);
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <div className="container mx-auto md:pl-8 mt-4">
        <span className="text-xl">Popular Destinations</span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-4 row-gap-4 mt-3">
          {destination.map((item) => <Card destination={item} />
          )}
        </div>
      </div>

      <div className="container mx-auto md:pl-8 pt-5">
        <span className="text-xl">We Offer</span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 col-gap-8 row-gap-4 mt-3">
          {destination.map((item) => <Offer />
          )}
        </div>
      </div>
    </div >
  );
}

export default App;
