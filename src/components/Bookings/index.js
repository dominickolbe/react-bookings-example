import React, { Component } from 'react';
import styled from 'styled-components';
import SingleBookingRow from '../SingleBookingRow';
import { filterBookings } from '../../utils';

const BookingsContainer = styled.div`
  background: white;
  border: 1px solid #D9DBDE;
  border-radius: 5px;
  box-shadow: 0 2px 3px 2px rgba(111, 111, 111, 0.06);
  padding: 0 25px;
  width: 100%;
`;

const BookingsContainerHeader = styled.div`
  border-bottom: 1px solid #D9DBDE;
  display: flex;
  align-items: center;
  height: 50px;
  div {
    border-bottom: 2px solid #FFF;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    height: 100%;
    margin-right: 25px;
    font-weight: bold;
    &.active {
      border-bottom: 2px solid #4EC45C;
    }
  }
`;

class Bookings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: [],
      status: 1,
    }
  }

  componentDidMount() {
    this.setState({ bookings: this.props.bookings })
  }

  changeStatus(id) {
    const bookings = this.state.bookings;
    bookings.forEach(booking => {
      if (booking.id === id) {
        booking.status++;
      }
    });
    this.setState({ bookings })
  }

  render() {
    const { status, bookings } = this.state;
    const list = filterBookings(bookings, status);
    return (
      <BookingsContainer>
        <BookingsContainerHeader>
          <div
            className={status === 1 ? 'active' : ''}
            onClick={() => this.setState({ status: 1 })}
          >
            Pending
          </div>
          <div
            className={status === 2 ? 'active' : ''}
            onClick={() => this.setState({ status: 2 })}
          >
            Confirmed
          </div>
        </BookingsContainerHeader>
        {list.map(booking => (
          <SingleBookingRow key={booking.id} {...booking} onClick={() => this.changeStatus(booking.id)} />
        ))}
      </BookingsContainer>
    );
  }
}

export default Bookings;
