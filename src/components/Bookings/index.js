import React, { Component } from 'react';
import styled from 'styled-components';
import SingleBookingRow from '../SingleBookingRow';

const BookingsContainer = styled.div`
  background: white;
  border: 1px solid #D9DBDE;
  border-radius: 5px;
  box-shadow: 0 2px 3px 2px rgba(111, 111, 111, 0.06);
  padding: 0 25px;
  width: 100%;
`;

class Bookings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookings } = this.props;
    return (
      <BookingsContainer>
        {bookings.map(booking => (
          <SingleBookingRow key={booking.id} {...booking} />
        ))}
      </BookingsContainer>
    );
  }
}

export default Bookings;
