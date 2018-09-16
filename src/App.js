import React, { Component } from 'react';
import Bookings from './components/Bookings';

const tmpBookings = [{
  id: 1,
  name: 'Hannah',
  time: '2018-10-01T15:17:04.552Z',
  status: 1, // pending
}, {
  id: 2,
  name: 'Johnny',
  time: '2018-10-03T03:14:10.552Z',
  status: 1, // pending
}, {
  id: 3,
  name: 'Thomas',
  time: '2018-10-19T03:12:36.552Z',
  status: 1, // pending
}, {
  id: 4,
  name: 'Richard',
  time: '2018-10-23T18:17:49.552Z',
  status: 2, // accepted
}];

class App extends Component {
  state = {
    bookings: tmpBookings
  }

  render() {

    const { bookings } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Bookings bookings={bookings} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
