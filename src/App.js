import React, { Component } from 'react';
import Bookings from './components/Bookings';

const tmpBookings = [{
  id: 1,
  name: 'Kenneth L',
  time: '2018-10-01T15:17:22.552Z',
  status: 1, // pending
}, {
  id: 2,
  name: 'Kenneth L',
  time: '2018-10-03T03:17:22.552Z',
  status: 2, // accepted
}, {
  id: 3,
  name: 'Kenneth L',
  time: '2018-10-03T03:17:22.552Z',
  status: 2,
}, {
  id: 4,
  name: 'Kenneth L',
  time: '2018-10-16T18:17:22.552Z',
  status: 2,
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
